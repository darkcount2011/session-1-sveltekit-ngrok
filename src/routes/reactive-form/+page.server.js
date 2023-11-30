



export const actions = {
    reactiveFormHandler: async ({request}) => {
      const data = await request.body();

      /**
       * Optional challenge:
       *
       * Validate the data using Zod, (Bonus: Transform the client form using the superforms library with Zod and use that library in the back-end as well: https://superforms.rocks/get-started)
       * Implement graceful error handling but avoid returning sensitive information to the client.
       * 
       */
      console.log("data received from form", data);
    }
}