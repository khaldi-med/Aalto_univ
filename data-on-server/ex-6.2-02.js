const getVisit = async () =>{
    const kv = await Deno.openKv();
    const visits = await kv.get(["visits"]);
    return visits.value ?? "Hello world!";
}

const incrementVisit = async () =>{
    let visits = await getVisit();
    visits++;
    await setVisit(visits);
}

const setVisit = async (v) =>{
    const kv = await Deno.openKv();
    await kv.set(["visits"], v)
}

export {getVisit, setVisit, incrementVisit}
