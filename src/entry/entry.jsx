import React, { useEffect, useState } from "react";

function Entry() {
    const [entryData, setEntryData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/entries')
            .then(response => response.json())
            .then(data => {
                //data = JSON.parse(data);
                setEntryData(data);
            });
    }, []);
    console.log(entryData);
    //console.log(entryData.member.entryContent);
    const entryCard = entryData.map(entry =>
        <EntryCard
            entryTitle={entry.entry_title}
            entryContent={entry.entry_content}>
        </EntryCard>
    )
    return entryCard
}

function EntryCard(props) {
    return <div key={props.id} >
        <h2>{props.entryTitle}</h2>
        <p>{props.entryContent}</p>
    </div>
}

const Content = () => {
    return (
        <div className="App-header">
            <Entry></Entry>
        </div>
    );
}
export default Content;