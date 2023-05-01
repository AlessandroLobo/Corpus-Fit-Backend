import * as dayjs from 'dayjs';

declare module 'dayjs' {
  interface Dayjs {
    utc(): this;
    tz(timezone: string): this;
  }

  function utc(): dayjs.Dayjs;
  function tz(timezone: string): dayjs.Dayjs;
}
