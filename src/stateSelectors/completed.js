// checks if task has been completed

function completed(task){
    if(task["completed"]){
        return true;
    };
    return false;
};

export default completed;