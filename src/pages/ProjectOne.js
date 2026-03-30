import './ProjectOne.css';
import Navbar from "../components/Navbar";

export default function ProjectOne() {
    return (
        <div>
            <Navbar />
        <div className="project-page" style={{
            backgroundImage: `
                    linear-gradient(rgba(15,23,42,0.85), rgba(15,23,42,0.85)),
                    url('/nz.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center"}}>

            <h1 className="project-title">AI NZ Coin Detector</h1>
            <p className="project-subtitle">
                Real-time computer vision system for detecting and valuing coins using deep learning.</p>
            <div className="project-one-container">
                <div className="left-column">
                    <h2>Project Overview</h2>
                    <p>AI model that identifies and classifies New Zealand coin denominations and calculates the total from an image.</p>
                    <h3>Key Features</h3>
                    <ul>
                        <li>Real-time object detection using YOLOv8</li>
                        <li>Automated data annotation using computer vision techniques</li>
                        <li>Automated data augmentation for improved accuracy</li>
                        <li>Calculates total coin values from model prediction</li>
                    </ul>
                    <h3>My Contribution</h3>
                    <ul>
                        <li>Built full dataset pipeline (creation + annotation + augmentation)</li>
                        <li>Trained and optimised YOLOv8m model</li>
                        <li>Implemented traditional computer vision techniques (HSV segmentation, edge detection)</li>
                        <li>Dataset with 42,154 annotations</li>
                    </ul>
                    <h3>Results</h3>
                    <ul>
                        <li>mAP@50-95: 0.91</li>
                        <li>98.5% accuracy on unseen images (tails)</li>
                        <li>98.3% accuracy on unseen images (heads)</li>
                    </ul>
                </div>

                <div className="middle-column">
                    <h2>Demo Video</h2>

                    <div className="video-wrapper">
                        <video controls>
                            <source src="/IMG_2775.mp4" type="video/mp4" />
                        </video>
                    </div>

                </div>
                <div className="right-column">
                    <h2>Full Report</h2>
                    <iframe
                        src="/cwe104_COSC428_paper.pdf"
                        title="Coin Detector Report"
                        width="100%">
                    </iframe>
                </div>
            </div>
        </div>
        </div>
    );
}
