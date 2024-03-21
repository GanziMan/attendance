import BaseApiClient, { Tokens } from "./BaseApiClient";

interface RecordData {
  attendanceId: string;
  status: string;
  attendeeId: string;
  date: string;
  day: string;
  lateReason: string;
}

interface RecordAllData {
  attendanceId: string;
  status: string;
  date: Date;
  day: string;
  lateReason: string;
}

class RecordApiClient extends BaseApiClient {
  private static instance: RecordApiClient;

  public constructor(tokens?: Tokens) {
    super(process.env.NEXT_PUBLIC_API_ROOT!, tokens);
  }

  public static getInstance() {
    if (this.instance == null) {
      this.instance = new RecordApiClient();
    }
    return this.instance;
  }

  public fetchRecord = (request: RecordData) =>
    this.axios.request({
      method: "POST",
      url: "/records",
      data: request,
    });

  public fetchAllRecord = (request: RecordAllData) =>
    this.axios.request({
      method: "POST",
      url: "/records/create",
      data: request,
    });
}

export default RecordApiClient;
