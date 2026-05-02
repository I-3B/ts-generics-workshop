type Channels = "email" | "sms" | "in-app";
type NotificationParams<T> = {
  message: string;
  channel: T;
} & (T extends "email" ? { emailAddress: string } : {}) &
  (T extends "sms" ? { phoneNumber: string } : {});

type NotificationParamsDiscriminatedUnion = {
  message: string;
} & (
  | { channel: "email"; emailAddress: string }
  | {
      channel: "sms";
      phoneNumber: string;
    }
  | {
      channel: "in-app";
    }
);

function sendNotification<T extends Channels>(options: NotificationParams<T>) {
  console.log(`Sending to ${options.channel}...`);
}

sendNotification({ message: "Hello", channel: "email", emailAddress: "me@example.com" });
