import React from "react";

const UserDetailsSections = ({ heading, data }) => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-semibold mb-2">{heading}</h1>

      {data.map((item, index) => (
        <div key={index}>
         
          <div className="flex py-2">
            <div className="w-1/2 pr-4">
              <h4 className="text-sm text-gray-400">{item.label1}</h4>
              <p className="text-base">{item.value1}</p>
            </div>
            
            <div className="w-1/2 pl-4">
              <h4 className="text-sm text-gray-400">{item.label2}</h4>
              <p className="text-base">{item.value2}</p>
            </div>
          </div>
           <div className="border-t border-gray-600 my-2"></div>
        </div>
        
      ))}
    </div>
  );
};

export default UserDetailsSections;
