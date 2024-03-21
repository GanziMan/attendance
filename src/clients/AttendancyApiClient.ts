import BaseApiClient, { Tokens } from "./BaseApiClient";

class AttendancyApiClient extends BaseApiClient {
  private static instance: AttendancyApiClient;

  public constructor(tokens?: Tokens) {
    super(process.env.NEXT_PUBLIC_API_ROOT!, tokens);
  }

  public static getInstance() {
    if (this.instance == null) {
      this.instance = new AttendancyApiClient();
    }
    return this.instance;
  }

  public getAttendanceList = () =>
    this.axios.request({
      method: "GET",
      url: "/attendances",
    });

  public getAttendanceDetailList = (id: string) =>
    this.axios.request({
      method: "GET",
      url: `/schedules/attendanceId/${id}?days=TUESDAY&days=MONDAY&timeFrom=0900&timeTo=1830`,
    });
}

export default AttendancyApiClient;
