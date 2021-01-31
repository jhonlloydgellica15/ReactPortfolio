import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

import L_Histaria from "../../assets/img/projects/histaria.webp";
import L_Potential from "../../assets/img/projects/potential.webp";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import L_AR from "../../assets/img/skills/easyar.webp";
import L_UNITY from "../../assets/img/skills/unity-technologies-logo.svg";
import L_CSHARP from "../../assets/img/skills/c--4.svg";
import L_ANDROID from "../../assets/img/skills/android.svg";
import L_SQL from "../../assets/img/skills/mssql.svg";
import L_BUNIFU from "../../assets/img/skills/bunifu.webp";
import L_PS from "../../assets/img/skills/photoshop-cc.svg";
import L_ILLUSTRATOR from "../../assets/img/skills/adobe-illustrator-cc.svg";

import "./ProjectTimeline.css";

const ProjectTimeline = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          <ImageEvent date="DECEMBER 2017" className="text-center" text="Potential Examination System" src={L_Potential} alt="Potential Examination System">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Mini Examination System for my subject (Software Development) project. Developed for students and teachers examination mini system.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>CRUD</li>
                          <li>The teachers and students can register account</li>
                          <li>The teacher can create quiz</li>
                          <li>The student can take quiz</li>
                          <li>Student and Teacher Portal</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSHARP} alt="CSHARP" rounded className="image-style1 m-1"></Image> C#
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_SQL} alt="MS-SQL" rounded className="image-style1 m-1"></Image> MS-Sql
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_BUNIFU} alt="Bunifu" rounded className="image-style1 m-1"></Image> Bunifu
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_PS} alt="Photoshop" rounded className="image-style1 m-1"></Image> Photoshop
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_ILLUSTRATOR} alt="Illustrator" rounded className="image-style1 m-1"></Image> Illustrator
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="">
                <UrlButton href="https://youtu.be/9FlkdTm5nRU" target="_blank">
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent date="MARCH 2020" className="text-center" text="HistARia" src={L_Histaria} alt="HistARia">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> HistARia is an augmented reality app for history books. When you scan the image on our ar sample book it plays background video about that image.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>The video will stay after tapping the fullscreen</li>
                          <li>Can play video when image target is on marker</li>
                          <li>Can fetch videos from cloud storage</li>
                          <li>Scrub controls(Play, Pause, Forward, fullscreen)</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_AR} alt="Easy Ar" rounded className="image-style m-1"></Image> Easy AR
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_UNITY} alt="UNITY" rounded className="image-style m-1"></Image> Unity
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSHARP} alt="Csarp" rounded className="image-style1 m-1"></Image> C#
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_ANDROID} alt="Android" rounded className="image-style1 m-1"></Image> Android
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className=" text-center">
                <UrlButton href="https://youtu.be/wflT7L6oMYo" target="_blank">
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default ProjectTimeline;
