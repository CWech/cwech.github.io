import './ProjectOne.css';
import { Link } from "react-router-dom";

export default function ProjectOne() {
    return (
        <div className="project-page">
            <Link to="/" className="back-button">← Back</Link>
            <h1 className="project-title">AI NZ Coin Detector</h1>
            <div className="project-one-container">

                <div className="left-column">
                    <h2>Project Overview</h2>
                    <p>
                        The creation of this AI model involved many steps, such as creating a dataset, automatically annotating the coins,
                        augmenting the data, and training the model.
                    </p>
                    <p>Firstly, a dataset had to be created. 15 videos of New Zealand coins were recorded, each 30 seconds in length, where each video had
                        a different variation in coin appearance (lighting, backgrounds, angles). These videos were then processed where every sixth frame was extracted
                        to produce a training image. </p>
                    <p>Then automatic annotation was performed using traditional computer vision techniques such as conversion to HSV colour space,
                        allowing for hue-based segmentation of the copper, silver and gold coins. Canny edge detection was then used to detect the edges in the coins.
                        Once the program detected these coins, a boundary box was drawn around them. </p>
                    <p>After training this model, it was not very accurate and did not perform
                        to my expectations. Therefore, I augmented all the data, generating three augmentations per image using geometric transformations,
                        colour, and lighting adjustments. This lead to a dataset that was much larger and simulated real world variations of images. This lead to a total of 42,154
                        total annotations.</p>
                    <p>To train the model, YOLOv8m was used, as it needed to work in real time so that a user could upload an image of their coins and the model
                        could calculate the monetary value of the coins in the image. YOLOv8 was used as a perfect balance between complexity and speed.</p>
                    <p>Finally, for the metrics of the model, it had an overall precision of 0.995, recall of 0.995, mAP@50 of 0.994 and mAP@0.91 when
                        tested on unseen images.</p>
                </div>

                <div className="middle-column">
                    <h2>Demo Video</h2>
                    <video controls width="20%" style={{maxHeight: '600px' }}>
                        <source src="/IMG_2775.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="right-column">
                    <h2>Full Report</h2>
                    <iframe
                        src="/cwe104_COSC428_paper.pdf"
                        title="Coin Detector Report"
                        width="100%"
                        height="600px">
                    </iframe>
                </div>

            </div>
        </div>
    );
}
