const data = {
  Physics: {
    "2025 Sample Paper": [],
    "2024 Set 1": [],
    "2024 Set 2": [],
    "2024 Set 3": [],
    "2024 Sample Set": []
  },
  Chemistry: {
    "2025 Sample Paper": [],
    "2024 Set 1": [],
    "2024 Set 2": [],
    "2024 Set 3": [],
    "2024 Sample Set": []
  },
  Mathematics: {
    "2025 Sample Paper": [],
    "2024 Set 1": [],
    "2024 Set 2": [],
    "2024 Set 3": []
  },
  "Information Practice": {
    "2025 Sample Paper": [],
    "2024 Set 1": []
  },
  Biology: {
    "2025 Sample Paper": [],
    "2024 Set 1": [],
    "2024 Set 2": [],
    "2024 Set 3": [],
    "2024 Sample Set": []
  },
  "English Core": {
    "2025 Sample Paper": [],
    "2024 Set 1": [],
    "2024 Set 2": [],
    "2024 Set 3": [],
  },
};

function createTopicList() {
  const listDiv = document.getElementById("checklist");

  for (const [subject, topics] of Object.entries(data)) {
    const subjectHeader = document.createElement("div");
    subjectHeader.textContent = subject;
    subjectHeader.classList.add("subject");
    subjectHeader.dataset.subject = subject;

    const topicContainer = document.createElement("div");
    topicContainer.classList.add("hidden");

    const topicList = document.createElement("ul");
    for (const [topic, subtopics] of Object.entries(topics)) {
      const topicItem = document.createElement("li");
      const topicLink = document.createElement("a");
      
      // Add PDF opening functionality for all subjects
      let pdfPath;
      const subjectCode = {
        "Physics": "55",
        "Chemistry": "56",
        "Mathematics": "65",
        "Information Practice": "90",
        "Biology": "57",
        "English Core": "1"
      };
      
      const subjectDirs = {
        "Physics": "P",
        "Chemistry": "C",
        "Mathematics": "M",
        "Information Practice": "IP",
        "Biology": "B",
        "English Core": "EC"
      };
      
      if (subjectDirs[subject]) {
        switch (topic) {
          case "2024 Set 1":
            if (subject === "Information Practice") {
              pdfPath = `pdfs/${subjectDirs[subject]}/90-S-1 IP.pdf`;
            } else if (subject === "English Core") {
              pdfPath = `pdfs/${subjectDirs[subject]}/1-S-1 EC.pdf`;
            } else {
              pdfPath = `pdfs/${subjectDirs[subject]}/${subjectCode[subject]}-S-1 ${subject}.pdf`;
            }
            break;
          case "2024 Set 2":
            if (subject === "English Core") {
              pdfPath = `pdfs/${subjectDirs[subject]}/1-S-2 EC.pdf`;
            } else {
              pdfPath = `pdfs/${subjectDirs[subject]}/${subjectCode[subject]}-S-2 ${subject}.pdf`;
            }
            break;
          case "2024 Set 3":
            if (subject === "English Core") {
              pdfPath = `pdfs/${subjectDirs[subject]}/1-S-3 EC.pdf`;
            } else {
              pdfPath = `pdfs/${subjectDirs[subject]}/${subjectCode[subject]}-S-3 ${subject}.pdf`;
            }
            break;
          case "2024 Sample Set":
            if (subject === "Information Practice") {
              pdfPath = `pdfs/${subjectDirs[subject]}/90-Sample IP.pdf`;
            } else if (subject === "English Core") {
              pdfPath = `pdfs/${subjectDirs[subject]}/1-Sample.pdf`;
            } else {
              pdfPath = `pdfs/${subjectDirs[subject]}/${subjectCode[subject]}(B)-S ${subject}.pdf`;
            }
            break;
          case "2025 Sample Paper":
            if (subject === "Information Practice") {
              pdfPath = `pdfs/${subjectDirs[subject]}/90-Sample IP.pdf`;
            } else if (subject === "English Core") {
              pdfPath = `pdfs/${subjectDirs[subject]}/1-Sample EC.pdf`;
            } else {
              pdfPath = `pdfs/${subjectDirs[subject]}/${subjectCode[subject]}-Sample ${subject}.pdf`;
            }
            break;
        }
        const isMobile = window.innerWidth <= 768;
        const viewerPath = isMobile ? 'mobile-pdf-viewer.html' : 'pdf-viewer.html';
        topicLink.href = `${viewerPath}?file=${pdfPath}`;
        topicLink.target = "_blank"; // Open in new tab
      } else {
        topicLink.href = "#";
      }
      
      topicLink.textContent = topic;
      topicLink.classList.add("topic-link");
      
      topicItem.appendChild(topicLink);
      topicList.appendChild(topicItem);

      const subtopicList = document.createElement("ul");
      subtopicList.classList.add("topic");

      subtopics.forEach((subtopic) => {
        const subtopicItem = document.createElement("li");
        const subtopicLink = document.createElement("a");
        subtopicLink.href = "#";
        subtopicLink.textContent = subtopic;
        subtopicLink.classList.add("subtopic-link");
        
        subtopicItem.appendChild(subtopicLink);
        subtopicList.appendChild(subtopicItem);
      });

      topicList.appendChild(subtopicList);
    }

    topicContainer.appendChild(topicList);
    listDiv.appendChild(subjectHeader);
    listDiv.appendChild(topicContainer);

    subjectHeader.addEventListener("click", () => {
      topicContainer.classList.toggle("hidden");
      topicContainer.classList.toggle("expanded");
    });
  }
}

document.addEventListener("DOMContentLoaded", createTopicList);