import {
  ToggleAudioPublishingButton,
  ToggleVideoPublishingButton,
  CallingState,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import {
  Loader2Icon,
  MessageSquareIcon,
  PhoneOff,
  UsersIcon,
  XIcon,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Channel,
  Chat,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "stream-chat-react/dist/css/v2/index.css";

function VideoCallUI({ chatClient, channel }) {
  const navigate = useNavigate();

  const { useCallCallingState, useParticipantCount } =
    useCallStateHooks();

  const callingState = useCallCallingState();
  const participantCount = useParticipantCount();

  const [isChatOpen, setIsChatOpen] = useState(false);

  if (callingState === CallingState.JOINING) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <Loader2Icon className="size-12 mx-auto animate-spin text-primary mb-4" />
          <p className="text-lg font-medium">
            Joining call...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex gap-4 relative str-video">
      {/* VIDEO SECTION */}
      <div className="flex flex-col gap-4">
        {/* HEADER */}
        <div className="cb-panel flex items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-2">
            <UsersIcon className="size-5 text-primary" />

            <span className="font-semibold">
              {participantCount}{" "}
              {participantCount === 1
                ? "participant"
                : "participants"}
            </span>
          </div>

          {chatClient && channel && (
            <button
              onClick={() =>
                setIsChatOpen(!isChatOpen)
              }
              className={`btn btn-sm rounded-xl gap-2 ${
                isChatOpen
                  ? "btn-primary"
                  : "btn-ghost"
              }`}
            >
              <MessageSquareIcon className="size-4" />
              Chat
            </button>
          )}
        </div>

        {/* VIDEO */}
        <div
          className={`
            bg-neutral
            rounded-lg
            overflow-hidden
            border
            border-base-content/10
            shadow-sm
            transition-all
            duration-300

            ${
              participantCount <= 1
                ? "h-[320px] w-[390px]"
                : "h-[460px] w-[520px]"
            }
          `}
        >
          <SpeakerLayout />
        </div>

        {/* CONTROLS */}
       <div className="flex justify-center gap-3">
  <ToggleAudioPublishingButton />
  <ToggleVideoPublishingButton />
  <button 
    className="btn btn-neutral btn-sm"
    onClick={() => navigate("/dashboard")}
  >
     <PhoneOff  size={24} />
  </button>
</div>
      </div>

      {/* CHAT */}
      {chatClient && channel && (
        <div
          className={`
            flex flex-col
            rounded-lg
            overflow-hidden
            bg-neutral
            text-neutral-content
            border border-neutral-content/15
            shadow-sm
            transition-all
            duration-300

            ${
              isChatOpen
                ? "w-[360px] opacity-100"
                : "w-0 opacity-0 border-0"
            }
          `}
        >
          {isChatOpen && (
            <>
              {/* CHAT HEADER */}
              <div className="flex items-center justify-between border-b border-neutral-content/15 bg-neutral px-4 py-3">
                <h3 className="font-semibold text-neutral-content">
                  Session Chat
                </h3>

                <button
                  onClick={() =>
                    setIsChatOpen(false)
                  }
                  className="rounded-md p-1 text-neutral-content/70 transition-colors hover:bg-neutral-content/10 hover:text-neutral-content focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-label="Close session chat"
                >
                  <XIcon className="size-5" />
                </button>
              </div>

              {/* CHAT CONTENT */}
              <div className="flex-1 overflow-hidden stream-chat-dark">
                <Chat
                  client={chatClient}
                  theme="str-chat__theme-dark"
                >
                  <Channel channel={channel}>
                    <Window>
                      <MessageList />
                      <MessageInput />
                    </Window>

                    <Thread />
                  </Channel>
                </Chat>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default VideoCallUI;
