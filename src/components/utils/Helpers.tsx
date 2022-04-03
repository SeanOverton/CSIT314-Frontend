export const formatDate = (unformatted_date: string) => {
    return unformatted_date.split("T")[0];
}

export const formatTime = (unformatted_date: string) => {
    if(!unformatted_date){
        return unformatted_date;
    }
    
    return unformatted_date.split("T")[1].substring(0, 5);

}