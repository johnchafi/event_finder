import React, { startTransition, useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { ICategory } from '@/lib/database/models/category.model'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Input } from '../ui/input'
import { createCategory, getAllCategory } from '@/lib/actions/category.actions'
  

type DropdownProps = {
    value?: string,
    onchangeHandler?: () => void
}

export const DropDown = ({value, onchangeHandler}: DropdownProps) => {
    const [categories, setCategories] = useState<ICategory[]>(
        []);
    const [newCategory, setNewCategory] = useState(value ? value : '');
    
    const handleAddCategory = () => {
      createCategory({
        categoryName: newCategory.trim()
      }).then((category) =>{
        setCategories((prevState) => [...prevState, category])
      })   
    }
    useEffect(()=> {
      const getcategories = async () => {
        const categoryList = await getAllCategory();
        categoryList && setCategories(categoryList as ICategory[]);
      }
      getcategories();
    }, [])
  return (
    <Select onValueChange={onchangeHandler} defaultValue={value} className="focus:border focus:border-primary-800 focus-visible:ring-0 focus-visible:ring-offset-0">
        <SelectTrigger className="w-[180px] bg-background focus:border focus:border-primary-800 focus-visible:ring-0 focus-visible:ring-offset-0">
            <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent className='bg-background hover:cursor-pointer'>
          {
            categories.length > 0 && categories.map((category) => (
                <SelectItem key={category._id} value={category._id} className='select-item p-regular-14 hover:cursor-pointer '>
                    {
                         category.name
                    }
                </SelectItem>
            )
               
            )
          }
        <AlertDialog>
            <AlertDialogTrigger className='p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500'>Add new category</AlertDialogTrigger>
            <AlertDialogContent className='bg-white dark:bg-[#121212]'>
                <AlertDialogHeader>
                <AlertDialogTitle>New Category</AlertDialogTitle>
                <AlertDialogDescription>
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => startTransition(handleAddCategory)}>Ad</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
  
        </SelectContent>
    </Select>

  )
}
