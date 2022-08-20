const sls = [
    {
        topic : "SR Latch (বাংলা)",
        link : "https://www.youtube.com/embed/XA87EgrUSE8",
    },

    {
        topic : "SR , JK Flip Flop (বাংলা)",
        link : "https://www.youtube.com/embed/ZNxnlvdiC-A",
    },

    {
        topic : "D , T Flip Flop (বাংলা)",
        link : "https://www.youtube.com/embed/WVoOJUlR87Y",
    },

    {
        topic : "Right Shift Register (বাংলা)",
        link : "https://www.youtube.com/embed/GQ6z0A2uf4c",
    }
]


const sls_box = document.getElementById("sls");


const load_sls_data = () => {
    sls.map(sls => {
        const topic =  document.createElement("div");

        topic.classList.add("topic");
        topic.innerHTML = `
            <div class="topic_youtube_frame">
                <iframe height="315" src="${sls.link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div class="topic_title">
                <h4>${sls.topic}</h4>
            </div>
        `;


        sls_box.appendChild(topic);
    })
}


load_sls_data();