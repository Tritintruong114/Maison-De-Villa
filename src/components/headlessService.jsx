import { HeadlessService } from "@novu/headless";

const headlessService = new HeadlessService({
  applicationIdentifier: "JlEOKgy1M6j4",
  subscriberId: "64783f548b0b51ed174e4f9c",
});

headlessService.initializeSession({
  listener: (res) => {
    console.log(res);
  },
  onSuccess: (session) => {
    console.log(session);
    headlessService.fetchNotifications({
      listener: (result) => {
        console.log(result);
      },
      onSuccess: (response) => {
        console.log(
          response.data,
          response.page,
          response.totalCount,
          response.pageSize
        );
      },
      // page: 1, // page number to be fetched
    });
  },
  onError: (error) => {
    console.error(error);
  },
});

export default headlessService;
