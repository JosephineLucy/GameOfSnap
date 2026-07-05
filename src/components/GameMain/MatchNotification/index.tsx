import type { NotificationType } from "../../../types";

type NotificationProps = {
  notificationType: NotificationType;
};

function MatchNotification({ notificationType }: NotificationProps) {
  return (
    <p className="match-notification">{`SNAP ${notificationType === "suitMatch" ? "SUIT" : "VALUE"}!`}</p>
  );
}

export default MatchNotification;
