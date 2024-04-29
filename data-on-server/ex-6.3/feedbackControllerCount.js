import * as feedbackCount from "./feedbackCount.js"

const getCount = async ()=>{
        return c.text(await feedbackCount.getFeed());
}

const incrementAndGetCount = async ()=>{
        await feedbackCount.incrementFeed();
        return c.text(await feedbackCount.getFeed());
}

export {getCount, incrementAndGetCount};

