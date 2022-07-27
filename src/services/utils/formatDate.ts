export default function formatDateTime(dateTime: string): string {
  var date: string = dateTime.substring(0, 10);
  var time: string = dateTime.substring(11, 16);
  var formatedDate: string = date.replaceAll('-','/');
  return(time + ' - ' + formatedDate);
}