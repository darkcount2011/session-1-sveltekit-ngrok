export async function load() {
  console.log("standard-form server loaded");
  return {
    standardFormData: "standard form data",
  };
}

export const actions = {
  standardFormHandler: async ({ request }) => {
    const data = await request.formData();
    console.log("data received from form", data);
    const fullname = data.get("fullName");
    const email = data.get("email");
    console.log("fullname", fullname);
    console.log("email", email);

    if (fullname !== "hey" || !email) {
      return {
        status: 400,
        toastMessage: {
          type: "negative",
          message: "request given is not correct",
        },
      };
    }

    return {
      status: 200,
      toastMessage: {
        type: "positive",
        message: "form request handled correctly",
      },
    };
  },
};
