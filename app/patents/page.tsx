import React from 'react';
import Breadcrumb from '../components/other/breadcumb';
import eventData from './patents.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const EventPage = () => {
  
  return (
    <>
      {/* <Breadcrumb
          pageName="Patents"
          description="Empowering User Experiences with captivating HTML, CSS, and JavaScript with projects that mesmerize and engage"
        /> */}

<div className=" align-center mt-10 flex justify-center gap-16 text-[#e4ded7] md:mb-9  lg:mb-10 ">
        <h4
          className={` text-[16px] text-gray-900 dark:text-gray-100 md:text-[20px] lg:text-[34px] ${"text-[#e4ded7]"}`}
        >
          Check out some of my Patents !
        </h4>
      </div>
      
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {eventData.map((event, index) => (
          <div className="rounded shadow-lg dark:border-2 dark:border-white" key={index}>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{event['Invention Title']}</div>
              {/* <p className="text-gray-700 dark:text-gray-200 text-base">{event.description}</p> */}
            </div>
            <div className="px-6 pt-4 pb-2">
              {event.tags.map((tag, tagIndex) => (
                
                  <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  key={tagIndex}
                >
                  {tag}
                </span>
                

                
                
                
              ))}

              <a href={event.download}>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">download</span>
              </a>

            </div>
            
            <div>
            


            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EventPage;
