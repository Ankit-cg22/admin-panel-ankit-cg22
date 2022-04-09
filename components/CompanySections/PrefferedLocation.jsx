
import React, { useState, useEffect } from 'react';

function PrefferedLocation({  }) {
  const [showlocation, setshowlocation] = useState(false);
  const [preferredLocation, setPreferredLocation] = useState([
    { name: 'Totally Open', selected: false },
    { name: 'Remote', selected: false },
    { name: 'Alanta, TX', selected: false },
    { name: 'Boston, MA', selected: false },
    { name: 'Chicago, IL', selected: false },
    { name: 'Denver, CO', selected: false },
    { name: 'Los Angeles, CA', selected: false },
    { name: 'Nashville, TN', selected: false },
    { name: 'New York, NY', selected: false },
    { name: 'Raleigh, NC', selected: false },
    { name: 'San Diego, CA', selected: false },
    { name: 'San Francisco, CA', selected: false },
    { name: 'Seattle, WA', selected: false },
    { name: 'Wilmington, DE', selected: false },
    { name: 'Houston, TX', selected: false },
    { name: 'Dallas, TX', selected: false },
    { name: 'Detroit MI', selected: false },
  ]);
  const [userPreferredLocation, setUserPrefferedLocation] = useState([]);
  const [totalPreferredLocation, setTotalPreferredLocation] = useState(0);
  const [autocomplete, setAutocomplete] = useState({
    disabled: true,
    data: [],
  });
  const [inputValue, setInputValue] = useState('');

  const updatePreferredLocation = (roleName) => {

      let flag = 1 ;
      for(let i=0 ; i<preferredLocation.length ; i++)
      {
        const x = preferredLocation[i];
        if(x.name == roleName)
        {
          flag = 0;
          break;
        }
      }
      if(flag) preferredLocation.unshift({name : roleName , selected : false})  
    
    const newData = preferredLocation.map((role) => {
      if (role.name === roleName)
        if (!role.selected && totalPreferredLocation === 7);
        else role.selected = !role.selected;

      return role;  
    })
    setPreferredLocation(newData);
    setInputValue('');
    setAutocomplete({
      disabled: true,
      data: [],
    });
  };

  useEffect(() => {
    let temp = 0;

    preferredLocation.forEach((role) => {
      if (role.selected) temp++;
    });
    setTotalPreferredLocation(temp);
  }, [preferredLocation]);

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.trim() === '')
      setAutocomplete({ disabled: true, data: [] });
    else {
      const autocompleteData = [];
      const regex = new RegExp(e.target.value, 'i');

      preferredLocation.forEach((role) => {
        if (regex.test(role.name)) autocompleteData.push(role.name);
      });

      setAutocomplete({
        disabled: false,
        data: [e.target.value, ...autocompleteData],
      });
    }
  };
  useEffect(() => {
    const body = document.getElementsByTagName('body');
    if ( showlocation) {
      body[0].style.overflow = 'hidden';
      body[0].style.position = 'fixed';
      body[0].style.width = '100%';
    } else {
      body[0].style.overflow = 'auto';
      body[0].style.position = 'relative';
    }
  }, [ showlocation]);

  return (
    <>
      {/* <div className="w-full rounded-[9px] border-[#D9D9D9] bg-white border-[1.5px] p-6 space-y-[15px]"> */}
        
          <div >
            {/* <div classN ame="bg-black bg-opacity-70 w-full h-full fixed z-50 inset-0 flex items-center justify-center edit-overlay"> */}
              {/* <div className="relative max-h-[746px] flex-col h-[94%] rounded-lg w-[640px] overflow-y-auto bg-white z-10 text-black min-w-[640px] my-6 mx-auto font-inter"> */}
                <div className="p-0 max-w-full">
                  {/* CONTENT START */}
                    
                  <div className="w-[100%] m-auto">
                    <div className="text-left ">
                      <h5 className="text-[12px] font-semibold text-[#201e27]">
                        Location
                      </h5>
                      {/* <p className="text-[#788699] text-[12px]  mt-1 font-inter">
                        Choose up to 7
                      </p> */}
                    </div>
                    <div className="relative flex-auto">
                      <input
                        // className="w-[90%] ml-[0.5rem] mt-[7px] mb-[7px] text-[#6b7280] outline-none rounded-[0.3125rem] border-1 border-[#ddd] h-10 text-[0.875rem] pl-[13px] "
                        className="appearance-none px-3 py-2 mt-[7px] mb-[7px] placeholder-[#6B7280] text-[#030303]  placeholder-opacity-90 relative w-full bg-white rounded text-sm border-[1.5px]  focus:outline-none focus:border-[#2dc5a1] focus:border-2 transition duration-200  ease-in bg-transparent"
                   
                        type="text"
                        value={inputValue}
                        onChange={handleInputValueChange}
                        placeholder="Example: Boston, Houston"
                        
                      />
                      <div
                        className={`${
                          autocomplete.disabled ? 'hidden' : ''
                        } absolute z-10 border rounded-md border-gray-300 py-1 bg-white ml-2 max-h-60 overflow-y-scroll`}
                        style={{ width: 'calc(100% + 20px)' }}
                      >
                        {autocomplete.data.map((item, index) => (
                          <div
                            key={index}
                            className="px-3 h-[2rem] flex items-center cursor-pointer 
                            font-medium text-sm hover:bg-gray-100"
                            onClick={() => updatePreferredLocation(item)}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="ml-1">
                      {preferredLocation.map((role, index) => {
                      if(role.name ) return(
                        <span
                          key={index}
                          className="inline-block border border-gray-300
                          rounded-full mr-2 mb-3 py-3 px-4 text-sm cursor-pointer text-gray-500 select-none"
                          style={{
                            background: role.selected ? '#61a0ff' : '',
                            color: role.selected ? '#fff' : '',
                          }}
                          onClick={() => updatePreferredLocation(role.name)}
                        >
                          {role.name}
                        </span>
                      )
                        } )  }
                    </div>
                  </div>
                </div>
                {/* CONTENT END */}
              </div>
            {/* </div> */}
          {/* </div> */}
     
      {/* </div> */}
    </>
  );
}

export default PrefferedLocation;