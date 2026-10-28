import { useNavigate } from "react-router";
import { useUser } from "@clerk/clerk-react";
import { useRef, useState } from "react";
import { useActiveSessions, useCreateSession, useMyRecentSessions } from "../hooks/useSessions";

import Navbar from "../Components/Navbar";
import WelcomeSection from "../Components/WelcomeSection";
import ActiveSessions from "../Components/ActiveSessions";
import RecentSessions from "../Components/RecentSessions";
import CreateSessionModal from "../Components/CreateSessionModal";

function DashboardPage() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [roomConfig, setRoomConfig] = useState({ problem: "", difficulty: "" });
  const sessionCreationInFlight = useRef(false);

  const createSessionMutation = useCreateSession();

  const {
    data: activeSessionsData,
    isLoading: loadingActiveSessions,
    isError: activeSessionsError,
    error: activeSessionsErrorDetail,
    refetch: refetchActiveSessions,
  } = useActiveSessions();
  const {
    data: recentSessionsData,
    isLoading: loadingRecentSessions,
    isError: recentSessionsError,
    error: recentSessionsErrorDetail,
    refetch: refetchRecentSessions,
  } = useMyRecentSessions();

  const handleCreateRoom = () => {
    if (!roomConfig.problem || !roomConfig.difficulty || sessionCreationInFlight.current) return;

    sessionCreationInFlight.current = true;
    createSessionMutation.mutate(
      {
        problem: roomConfig.problem,
        difficulty: roomConfig.difficulty.toLowerCase(),
      },
      {
        onSuccess: (data) => {
          setShowCreateModal(false);
          navigate(`/session/${data.session._id}`);
        },
        onSettled: () => {
          sessionCreationInFlight.current = false;
        },
      }
    );
  };

  const activeSessions = activeSessionsData?.sessions || [];
  const recentSessions = recentSessionsData?.sessions || [];

  const isUserInSession = (session) => {
    // The active-session endpoint intentionally omits Clerk IDs and returns
    // viewer-relative role flags instead.
    return Boolean(session.isHost || session.isParticipant);
  };

  return (
    <>
      <div className="min-h-screen bg-base-100">
        <Navbar />
        <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
          <WelcomeSection
            firstName={user?.firstName}
            onCreateSession={() => setShowCreateModal(true)}
          />

          <ActiveSessions
            sessions={activeSessions}
            isLoading={loadingActiveSessions}
            isError={activeSessionsError}
            errorMessage={activeSessionsErrorDetail?.response?.data?.message || "Active sessions could not be loaded."}
            onRetry={refetchActiveSessions}
            isUserInSession={isUserInSession}
            onCreateSession={() => setShowCreateModal(true)}
          />

          <RecentSessions
            sessions={recentSessions}
            isLoading={loadingRecentSessions}
            isError={recentSessionsError}
            errorMessage={recentSessionsErrorDetail?.response?.data?.message || "Recent sessions could not be loaded."}
            onRetry={refetchRecentSessions}
          />
        </main>
      </div>

      <CreateSessionModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        roomConfig={roomConfig}
        setRoomConfig={setRoomConfig}
        onCreateRoom={handleCreateRoom}
        isCreating={createSessionMutation.isPending}
      />
    </>
  );
}

export default DashboardPage;
