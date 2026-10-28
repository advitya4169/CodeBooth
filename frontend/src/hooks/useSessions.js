import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useUser } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import { sessionApi } from "../api/sessions";

export const useCreateSession = () => {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationKey: ["createSession"],
    mutationFn: sessionApi.createSession,
    onSuccess: () => {
      toast.success("Session created successfully!");
      void queryClient.invalidateQueries({ queryKey: ["activeSessions"] });
    },
    onError: (error) => {
      const message = error.response?.data?.message;
      const fallback = error.response?.status
        ? `Room creation failed (HTTP ${error.response.status})`
        : "Could not reach the server. Check your connection and try again.";
      toast.error(message || fallback);
    },
  });

  return result;
};

export const useActiveSessions = () => {
  const { user, isLoaded } = useUser();
  const userId = user?.id;
  const result = useQuery({
    queryKey: ["activeSessions", userId],
    queryFn: sessionApi.getActiveSessions,
    enabled: isLoaded && Boolean(userId),
  });

  return result;
};

export const useMyRecentSessions = () => {
  const { user, isLoaded } = useUser();
  const userId = user?.id;
  const result = useQuery({
    queryKey: ["myRecentSessions", userId],
    queryFn: sessionApi.getMyRecentSessions,
    enabled: isLoaded && Boolean(userId),
  });

  return result;
};

export const useSessionById = (id) => {
  const result = useQuery({
    queryKey: ["session", id],
    queryFn: () => sessionApi.getSessionById(id),
    enabled: !!id,
    refetchInterval: 5000, // refetch every 5 seconds to detect session status changes
  });

  return result;
};

export const useJoinSession = () => {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationKey: ["joinSession"],
    mutationFn: sessionApi.joinSession,
    onSuccess: () => {
      toast.success("Joined session successfully!");
      void queryClient.invalidateQueries({ queryKey: ["activeSessions"] });
    },
    onError: (error) => toast.error(error.response?.data?.message || "Failed to join session"),
  });

  return result;
};

export const useEndSession = () => {
  const queryClient = useQueryClient();
  const result = useMutation({
    mutationKey: ["endSession"],
    mutationFn: sessionApi.endSession,
    onSuccess: () => {
      toast.success("Session ended successfully!");
      void queryClient.invalidateQueries({ queryKey: ["activeSessions"] });
      void queryClient.invalidateQueries({ queryKey: ["myRecentSessions"] });
    },
    onError: (error) => toast.error(error.response?.data?.message || "Failed to end session"),
  });

  return result;
};
