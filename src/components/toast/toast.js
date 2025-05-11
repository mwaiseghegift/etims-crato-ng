import { toast } from "sonner";

export default function showToastMessage({
  type,
  message,
  position = "bottom-right",
  duration = 2000
}) {
  const options = {
    position: position || "bottom-right",
    duration: duration,
  };

  switch (type) {
    case "success":
      toast.success(
        message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    case "info":
      toast.info(message, options);
      break;
    case "warning":
      toast.warning(message, options);
      break;
    default:
      toast(message, options);
  }
}
