'use client'
import {useTranslations} from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
 
export default function HomePage() {
  const [language,setLanguage] =useState<string>('2');
  const t = useTranslations('HomePage');
  const route=useRouter();
  const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    let lan=e.target.value;
    setLanguage(lan);
    route.push(`/${lan}`);  // update URL with new language
  }
  return (
  <>
     <select onChange={handleChange} style={{border:'1px solid black'}} name="" id="" value={language}>
         <option value="2">Chọn ngôn ngữ</option>
        <option value="en">English</option>
        <option value="vi">Vietnamese</option>
     </select>
    <h1>{t('title')}</h1>
    <p>{t('description')}</p>
  </>
  )
}