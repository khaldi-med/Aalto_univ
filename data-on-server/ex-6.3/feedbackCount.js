
const getFeed = async ()=>{
        const kv = await Deno.openKv();
        const feedback = await kv.get("feedback");
        return feedback.value ?? 0;
}

const incrementFeed = async ()=>{
        let feedback = await Deno.getFeed();
        feedback++;
        await setFeedb(feedback);
}

const setFeedb = async (feed)=>{
        const kv = await Deno.openKv();
        await kv.set(["feedback"], feed);
}

export {getFeed, incrementFeed}

