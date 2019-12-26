const timeFormat = time => {
    if(!time) return '--';
    const weekDays = ['一', '二', '三', '四', '五', '六', '七']
    let date = new Date(time)

    let year = date.getFullYear()
    let month = (date.getMonth() + 1 >= 10 ? (date.getMonth() + 1): ('0' + date.getMonth() + 1));
    let day = date.getDate() >= 10? date.getDate(): ('0' + date.getDate())
    let hours = date.getHours() >= 10? date.getHours(): ('0' + date.getHours())
    let minutes = date.getMinutes() >= 10? date.getMinutes(): ('0' + date.getMinutes())
    let seconds = date.getSeconds() >= 10? date.getSeconds(): ('0' + date.getSeconds())
    let weekDay = weekDays[date.getDay() -1]

    return year + '-' + month + '-' + day + ' ' + hours+ ':' + minutes + ':' +seconds + ' 星期' + weekDay
}


export default { timeFormat }
