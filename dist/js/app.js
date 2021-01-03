

function schedules() {
    return {
        schedules: [],
        isLoading: false,
        fetchSchedules() {
            this.isLoading = true

            fetch("./schedules.json")
            .then(response => {
               return response.json();
            })
            .then(data => {
                let DateTime = luxon.DateTime

                this.schedules = data.map(d => {
                    update = {start: DateTime.fromISO(d.start)}
                    return Object.assign(d, update)
                })
                
                this.isLoading = false
            });
        },
        isPast(datetime) {
            let now = luxon.DateTime.utc()

            datetime < now
        },
        toRelative(datetime) {
            let now = luxon.DateTime.utc()
            let cue = "Starts"
        
            if (datetime < now) {
                cue = "Started"
            }

            return `${cue} ${datetime.toRelative()}`
        }
    }
}