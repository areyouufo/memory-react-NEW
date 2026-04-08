import { useState } from "react";
import images from '../data.json'

export default function useGame(){
    //списк отгаданных карточек
    const [finishedItmes, setfinishedItems] = useState ([]) //выбрать из списка
    //счётчик шагов
    const[stepsCount, setStepsCount] = useState (0);
    //функция сравнения 2 карточек
    const checkItems = (firstItem, secondItem) => {
        //находим первую карточку
        const firstImage = images.find (({id}) => id == firstItem)
        //находим вторую карточку
        const secondImage = images.find (({id}) => id == secondItem)

        if(firstImage.url == secondImage.url) { //если карточки одинаковы
            //добавляем отгаданные карточки в массив отгаданных карточек
            setfinishedItems((items)=>[...items, firstItem, secondItem])
        }
        //увеличиваем счётчик шагов на 1
        setStepsCount(stepsCount + 1)
    }
    //функция сброса игры
    const handleReset = () => {
        setfinishedItems([]) //очищаем массив с отгаданными карточками
        setStepsCount(0) //обнуляем счётчик шагов
    }

    //проверка конца игры
    const isWin = finishedItmes.length == images.length

    return {
        finishedItmes,
        stepsCount,
        isWin,
        handleReset,
        checkItems
    }

}