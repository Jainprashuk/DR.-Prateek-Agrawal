import React from 'react';
import Breadcrumb from '../components/other/breadcumb';
import eventData from './patents.json';

const EventPage = () => {
  return (
    <>
      <div className=" align-center mt-10 flex justify-center gap-16 text-[#e4ded7] md:mb-9  lg:mb-10 ">
        <h4
          className={` text-[16px] text-gray-900 dark:text-gray-100 md:text-[20px] lg:text-[34px] ${"text-[#e4ded7]"}`}
        >
          Check out some of my Projects !
        </h4>
      </div>
      
      
      <ul className="p-4 lg:p-8 dark:black dark:text-gray-100">
	<li>
		<article>
			<a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900">
				<h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">Virtual Classroom.</h3>
				<time  className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400">Graduation Level</time>
				<p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
Java is employed to create a virtual environment that facilitates text and video streaming. This environment fosters seamless interaction between teachers and students who are geographically separated and unable to attend classes in person.</p>
			</a>
		</article>
	</li>
  <hr />
	<li>
		<article>
			<a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900">
				<h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">Multilingual Speaker Recognition using Artificial Neural Network</h3>
				<time  className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400">Post Graduation Level</time>
				<p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">Utilizing MATLAB 7.0.1, an implementation is undertaken to achieve speaker recognition across multiple languages. This method encompasses eight diverse Indian regional languages: Hindi, English, Assamese, Telugu, Punjabi, Rajasthani, Marathi, and Bengali. The implementation employs the Back Propagation Algorithm, yielding an impressive average efficiency of 95.357%. This approach involves 32 speakers for each language, resulting in comprehensive language-specific recognition outcomes.</p>
			</a>
		</article>
	</li>
  <hr />
	<li>
		<article>
			<a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900">
				<h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">A Machine Translation System for Sanskrit to Hindi Language</h3>
				<time  className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400">Doctoral Level</time>
				<p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">Using a combination of Java, NetBeans, MS Access, NLTK, and Wamp Server, a sophisticated translation tool has been meticulously crafted. This tool employs a rule-based methodology to transform Sanskrit narratives into their corresponding Hindi equivalents. A robust corpus has been constructed, enabling effective handling of Sanskrit vocabulary with exceptional efficiency. The implementation encompasses a range of algorithms, including stemming, discourse integration, and pragmatic analysis, which collectively elucidate the comprehensive functionality of the proposed language translation tool.</p>
			</a>
		</article>
	</li>
  <hr />
  <li>
		<article>
			<a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900">
				<h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">ASPIDE (funded by European Horizon 2020)
</h3>
				<time  className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400">Post-Doctoral Level</time>
				<p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">Python plays a pivotal role in managing intricate data processing tasks within data-intensive applications on High-Performance Computing (HPC) systems.</p>
			</a>
		</article>
	</li>
  <hr />
  <li>
		<article>
			<a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900">
				<h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">APOLLO (Funded by Austrian FFG)</h3>
				<time  className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400">Post-Doctoral Level</time>
				<p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">By leveraging the capabilities of FFmpeg and Python, a comprehensive solution is devised for predicting, scheduling, and automating video transcoding tasks. This intricate process aims to enhance machine and instance utilization efficiency, minimize costs, and optimize time requirements, all while ensuring superior video quality and an enhanced user experience.</p>
			</a>
		</article>
	</li>
  <hr />
	<li>
		<article>
			<a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900">
				<h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">ARTICONF (funded by European Horizon 2020)
</h3>
				<time  className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400">Post-Doctoral Level</time>
				<p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">Using Python, the focus is on researching and crafting trust-based heuristics and algorithms. These solutions are based on machine learning methodologies and are designed to effectively counter misinformation issues, including fake news. Furthermore, the developed algorithms are seamlessly integrated with other modules within a federated environment, ensuring a comprehensive and cohesive approach to addressing misinformation challenges.</p>
			</a>
		</article>
	</li>
</ul>
    </>
  );
};

export default EventPage;
