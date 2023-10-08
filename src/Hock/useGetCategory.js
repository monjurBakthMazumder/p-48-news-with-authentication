import  { useEffect, useState } from 'react';

const useGetCategory = () => {
    const [categories, setCategories] = useState()

    useEffect(()=>{
        fetch('/categories.json')
        .then(res=> res.json())
        .then(data=> setCategories(data))
    },[])
    return [categories];
};

export default useGetCategory;