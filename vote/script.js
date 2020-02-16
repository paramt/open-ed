var upvoted = []
var downvoted = []

const updateCount = suggestion => {
    const upvotesCount = document.getElementById(suggestion);
    if(upvoted.includes(suggestion)) {
        upvotesCount.innerHTML = parseInt(upvotesCount.innerHTML) + 1;
    } else if(downvoted.includes(suggestion)) {
        upvotesCount.innerHTML = parseInt(upvotesCount.innerHTML) - 1;  
    }
}

const upvote = (suggestion, upvoteButton, downvoteButton) => {
    const upvotesCount = document.getElementById(suggestion);
    
    if(upvoted.includes(suggestion)) {
        upvoted.splice( downvoted.indexOf(suggestion), 1);
        upvotesCount.innerHTML = parseInt(upvotesCount.innerHTML) - 1;
        upvoteButton.classList.remove("upvoted");
    } else {
        // Remove suggestion from the downvoted list
        if(downvoted.includes(suggestion)) {
            downvoted.splice( downvoted.indexOf(suggestion), 1);
            upvotesCount.innerHTML = parseInt(upvotesCount.innerHTML) + 1;
            downvoteButton.classList.remove("downvoted");
        }

        upvoted.push(suggestion);
        upvotesCount.innerHTML = parseInt(upvotesCount.innerHTML) + 1;
        upvoteButton.classList.add("upvoted");
    }
}

const downvote = (suggestion, downvoteButton, upvoteButton) => {
    const upvotesCount = document.getElementById(suggestion);

    if(downvoted.includes(suggestion)) {
        downvoted.splice( downvoted.indexOf(suggestion), 1);
        upvotesCount.innerHTML = parseInt(upvotesCount.innerHTML) + 1;
        downvoteButton.classList.remove("downvoted");
    } else {
        // Remove suggestion from the upvoted list
        if(upvoted.includes(suggestion)) {
            upvoted.splice( downvoted.indexOf(suggestion), 1);
            upvotesCount.innerHTML = parseInt(upvotesCount.innerHTML) - 1;
            upvoteButton.classList.remove("upvoted");
        }

        downvoted.push(suggestion);
        upvotesCount.innerHTML = parseInt(upvotesCount.innerHTML) - 1;
        downvoteButton.classList.add("downvoted");
    }
}