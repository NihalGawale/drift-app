import { UserMessageProps } from "../Types/ContactTypes";

export const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

export const validateContactForm = (userMessage: UserMessageProps) => {
  const errors = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  };

  // First Name
  if (!userMessage.firstName.trim()) {
    errors.firstName = "First name is required.";
  } else if (!/^[A-Za-z]{2,}$/.test(userMessage.firstName.trim())) {
    errors.firstName = "Name should only contain letters.";
  }

  // Last Name
  if (!userMessage.lastName.trim()) {
    errors.lastName = "Last name is required.";
  } else if (!/^[A-Za-z]{2,}$/.test(userMessage.lastName.trim())) {
    errors.lastName = "Name should only contain letters.";
  }

  // Last Name
  if (!userMessage.email.trim()) {
    errors.email = "Email is required.";
  } else if (!isValidEmail(userMessage.lastName.trim())) {
    errors.email = "Enter a valid Email."
  }

  // Phone Number
  if (!userMessage.phoneNumber.trim()) {
    errors.phoneNumber = "Phone number is required.";
  } else if (!/^\d{10}$/.test(userMessage.phoneNumber.trim())) {
    errors.phoneNumber = "Enter a valid 10-digit phone number.";
  }

  // Message
  if (!userMessage.message.trim()) {
    errors.message = "Message is required.";
  } else if (userMessage.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
};
