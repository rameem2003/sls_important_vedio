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
    },


    {
        topic : "Ripple Up Counter (বাংলা)",
        link : "https://www.youtube.com/embed/dDC-bKhiP8Y",
    },

    {
        topic : "Ripple Down Counter (বাংলা)",
        link : "https://www.youtube.com/embed/QT1grT7pDSQ",
    },

    {
        topic : "Synchronous Counter (বাংলা)",
        link : "https://www.youtube.com/embed/abK92FbjDpQ",
    },

    {
        topic : "Ring Counter (বাংলা)",
        link : "https://www.youtube.com/embed/fECqK99Ez4E",
    },

    {
        topic : "2 Bit Comparator (হিন্দি)",
        link : "https://www.youtube.com/embed/wdHujL8ag_s",
    },

    {
        topic : "Binary Rate Mutiplier (বাংলা)",
        link : "https://www.youtube.com/embed/gAFCGTXLfA8",
    },

    {
        topic : "Binary weighted d/a converter (হিন্দি)",
        link : "https://www.youtube.com/embed/Xjub9-TeXM4",
    },

    {
        topic : "R/2R Ladder d/a converter (হিন্দি)",
        link : "https://www.youtube.com/embed/v0RiPY-cDUw",
    },
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