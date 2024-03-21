import BaseApiClient, { Tokens } from "./BaseApiClient";

interface ScheduleData {
  attendanceId: string;
  attendeeId: string;
  day: string;
  time: string;
}

interface RoasterData {
  name: string;
  age: string;
  mobileNumber: string;
  subMobileNumber: string;
  description: string;
  attendanceId: string;
}

class ScheduleApiClient extends BaseApiClient {
  private static instance: ScheduleApiClient;

  public constructor(tokens?: Tokens) {
    super(process.env.NEXT_PUBLIC_API_ROOT!, tokens);
  }

  public static getInstance() {
    if (this.instance == null) {
      this.instance = new ScheduleApiClient();
    }
    return this.instance;
  }

  public updateSchedule = (request: ScheduleData) =>
    this.axios.request({
      method: "POST",
      url: "/schedules",
      data: request,
    });

  //명단 아이들 생성
  public createRoaster = (request: RoasterData) =>
    this.axios.request({
      method: "POST",
      url: "/attendees",
      data: request,
    });

  public getRoasterList = (id: string) =>
    this.axios.request({
      method: "GET",
      url: `/attendees/attendanceId/${id}`,
    });
}

export default ScheduleApiClient;
