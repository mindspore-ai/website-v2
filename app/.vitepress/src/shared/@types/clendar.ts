export interface TimeData {
  id: number;
  group_name: string;
  meeting_type: number;
  city: string;
  startTime: string;
  endTime: string;
  duration: number;
  activity_category: number;
  duration_time: string;
  name: string;
  creator: string;
  schedules: string;
  start_date: string;
  activity_type: number;
  end_date: string;
  title: string;
  detail: string;
  url: string;
  join_url: string;
  meeting_id: string;
  etherpad: string;
  replay_url: string;
  platform: string;
}

export interface TableData {
  date: string;
  start_date: string;
  timeData: TimeData[];
}
