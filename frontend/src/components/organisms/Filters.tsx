import { useContact } from '@context/useContact';
import { useSystem } from '@context/useSystem';
import React, { useEffect, useRef, useState } from 'react';
import { BsCake2Fill, BsCalendar2Month } from 'react-icons/bs';
import { ImManWoman } from 'react-icons/im';
import { IoLanguage } from 'react-icons/io5';
import { iContactItem } from '@interfaces/index';
import { LiaBirthdayCakeSolid } from 'react-icons/lia';

interface iLanguage {
  language: string;
  qtn: number;
}

interface iGender {
  gender: string;
  qtn: number;
}

interface iMonth {
  month: string;
  qtn: number;
}

const Filters = () => {
  const {
    searchContext,
    setSearchContext,
    setSearchSkeletonOverlayActive,
    isFilterActive,
    setIsFilterActive,
  }: any = useSystem();

  const [languages, setLanguages] = useState<iLanguage[]>();
  const [genders, setGenders] = useState<iGender[]>();
  const [birthMonths, setBirthMonths] = useState<iMonth[]>();

  const { setContacts, initialContacts }: any = useContact();

  const formRef = useRef<HTMLFormElement>(null);
  var typingTimer: any;
  let handleSearch = () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {}, 2000);

    let context = {
      slug: searchContext.slug,
      gender: searchContext.gender,
      language: searchContext.language,
      birthMonth: searchContext.birthMonth,
      age: searchContext.age,
    };

    if (formRef.current) {
      let gender = formRef.current.gender.value;
      context.gender = gender;

      let language = formRef.current.language.value;
      context.language = language;

      let birthMonth = formRef.current.birthMonth.value;
      context.birthMonth = birthMonth;

      let age = formRef.current.age.value;
      context.age = age;

      setSearchContext(context);
    }
  };

  const monthsArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  useEffect(() => {
    let genderList: iGender[] = [];
    let languageList: iLanguage[] = [];
    let monthsList: { month: string; qtn: number }[] = Array.from(
      { length: 12 },
      (_, i) => ({ month: monthsArray[i], qtn: 0 })
    );

    initialContacts.forEach((item: iContactItem) => {
      const genderIndex = genderList.findIndex(
        (langObj) => langObj.gender === item.gender
      );

      if (genderIndex !== -1) {
        genderList[genderIndex].qtn += 1;
      } else {
        let obj = {
          gender: item.gender,
          qtn: 1,
        };
        genderList.push(obj);
      }

      const languageIndex = languageList.findIndex(
        (langObj) => langObj.language === item.language
      );

      if (languageIndex !== -1) {
        languageList[languageIndex].qtn += 1;
      } else {
        let obj = {
          language: item.language,
          qtn: 1,
        };
        languageList.push(obj);
      }

      const birthMonth = new Date(item.birthdate).getMonth();
      monthsList[birthMonth].qtn += 1;
    });
    setGenders(genderList);
    setLanguages(languageList);
    setBirthMonths(monthsList);
  }, [initialContacts]);

  return (
    <div
      className={`filters min-[1130px]:h-12 flex h-52 flex-col items-center justify-center bg-[#F4F5F5] mb-4 px-4 md:px-16 min-[1130px]:px-24 transition-all duration-300 z-10 ${
        !isFilterActive && '-mt-52 min-[1130px]:-mt-12 opacity-0'
      }`}
    >
      <form
        className="flex flex-col  min-[1130px]:flex-row w-full gap-2 min-[1130px]:gap-4 relative justify-center min-[1130px]:justify-start"
        ref={formRef}
        onChange={() => {
          handleSearch();
        }}
      >
        <div className="genderSelect flex items-center gap-1 text-[#00997B]">
          <ImManWoman />
          <select
            name="gender"
            id="gender"
            className="shadow-md rounded-md px-2 py-1"
          >
            <option value="">Select Gender</option>
            {genders &&
              genders.map((item, index: number) => (
                <option
                  key={index}
                  value={item.gender.toLowerCase()}
                >
                  {item.gender} ({item.qtn})
                </option>
              ))}
          </select>
        </div>

        <div className="languageSelect flex items-center text-[#00997B] gap-1">
          <IoLanguage />
          <select
            name="language"
            id="language"
            className="shadow-md rounded-md px-2 py-1"
          >
            <option value="">Select Language</option>
            {languages &&
              languages.map((item, index: number) => (
                <option
                  key={index}
                  value={item.language.toLowerCase()}
                >
                  {item.language} ({item.qtn})
                </option>
              ))}
          </select>
        </div>

        <div className="birthMonthSelect flex items-center text-[#00997B] gap-1">
          <BsCalendar2Month />
          <select
            name="birthMonth"
            id="birthMonth"
            className="shadow-md rounded-md px-2 py-1"
          >
            <option value="">Select Birth Month</option>
            {birthMonths &&
              birthMonths.map((item, index) => (
                <option
                  key={index}
                  value={item.month}
                >
                  {item.month} ({item.qtn})
                </option>
              ))}
          </select>
        </div>

        <div className="ageSelect flex items-center text-[#00997B] gap-1">
          <LiaBirthdayCakeSolid />
          <input
            type="number"
            name="age"
            id="age"
            className="shadow-md rounded-md px-2 py-1"
            placeholder="Select Max Age"
          />
        </div>

        <button
          className="px-2 py-[6px] flex  bg-[#00997B] shadow-md rounded-md max-w-[100px] ml-5 min-[1130px]:ml-0 text-white text-sm min-[1130px]:absolute min-[1130px]:right-0 items-center"
          type="reset"
          onClick={() => {
            setContacts(initialContacts);
            setSearchContext({});
          }}
        >
          RESET FORM
        </button>
      </form>
    </div>
  );
};

export default Filters;
