type Channels = "email" | "sms" | "in-app";
type NotificationParams = {
  message: string;
  channel: Channels;
  phoneNumber?: string;
  emailAddress?: string;
  // ... many more properties
};

function sendNotification(options: NotificationParams) {
  if (options.channel === "email" && !options.emailAddress) {
    throw new Error("Email address is required");
  }

  if (options.channel === "sms" && !options.phoneNumber) {
    throw new Error("Phone number is required");
  }

  console.log(`Sending to ${options.channel}...`);
}

sendNotification({ message: "Hello", channel: "email" });
