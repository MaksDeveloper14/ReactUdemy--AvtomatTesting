import React, { Component } from 'react'
// Не забываем импортировать стили компонента
import classes from './QuizCreator.css'
import Button from '../../components/UI/Button/Button.js'
// Импортируем здесь функцию createControl из formFramework
import {createControl} from '../../form/formFramework.js'
import Input from '../../components/UI/Input/Input.js'
import Auxillary from '../../hoc/Auxillary/Auxillary.js'



// Следуя принципу DRY (не повторяйся), создаём функцию
function createOptionControl(number) {
	// возвращает объект с набором конфигурации
	return createControl({
			label: `Вариант ${number}`,
			errorMessage: 'Значение не может быть пустым',
			id: number
		}, {required: true});
}

// Обнуление formControls в state после добавления вопроса
function createFormControls() {
	return {
			// Статический объект, который заново инициализирует форму
			// вопрос и 4 варианта ответа
			question: createControl({
				label: 'Введите вопрос',
				errorMessage: 'Вопрос не может быть пустым'
			}, {required: true}),
			option1: createOptionControl(1),  
			option2: createOptionControl(2),
			option3: createOptionControl(3),
			option4: createOptionControl(4),
		}
}

export default class QuizCreator extends Component {
	state = {
		// здесь будут все вопросы
		quiz: [],
		formControls: createFormControls()
	}

	submitHandler = event => {
		// отменяем стандартное поведение
		event.preventDefault();
	}

	addQuestionHandler = () => {
		// добавляем объект вопроса в массив quiz в state
		// после добавления вопроса нужно обнулить весь наш formControls в state
	}

	createQuizHandler = () => {
		// пока ничего нету
	}

	changeHandler = (value, controlName) => {

	}

	renderControls() {
		return Object.keys(this.state.formControls).map((controlName, index) => {
			const control = this.state.formControls[controlName];
			return (
				<Auxillary key={controlName + index}>
					<Input 
						label={control.label}
						value={control.value}
						valid={control.valid}
						shouldValidate={!!control.validation}
						touched={control.touched}
						errorMessage={control.errorMessage}
						onChange={event => this.changeHandler(event.target.value, controlName)}
					/>
					{/* добавление горизонтальной черты по условию */}
					{ index === 0 ? <hr /> : null }
				</Auxillary>
			)
		})
	}

	render() {
		return (
			<div className={classes.QuizCreator}>
			  <div>
					<h1>Создание теста</h1>
					<form onSubmit={this.submitHandler}>
						{ this.renderControls() }
						<select></select>
						<Button 
							type="primary"
							onClick={this.addQuestionHandler}
						>
							Добавить вопрос
						</Button>
						<Button 
							type="success"
							onClick={this.createQuizHandler}
						>
							Создать тест
						</Button>
					</form>
				</div>
			</div>
		)
	}
}




// 
// ~~~~~~~~~~~~~~~~~~~~~~~   Документируем файл   ~~~~~~~~~~~~~~~~~~~~~~~~~


// Импортируем стили компонента в этот файл компонент.js
// Classes - классы
// Корневому элементу задаём className={classes.корневой класс - прописанный в стилях}
// Вешаем обработчики на элементы this.метод
// Создаем методы-обработчики в классе
// Стрелочный метод
// Выносим элемент select как отдельный компонент
// Button компонент уже готов в папке UI - поэтому импортируем его сюда
// Задаем параметры элементу
// У каждой кнопки свои обработчики
// type="primary" и type="success" - разные цвета кнопок
// Генерируем input-ы на основе state
// Фреймворк для работы с формами в React
// config - конфигурация
// ../../ - выходим на 2 уровня выше
// В JSX можно выдавать элементы по условию используя тернарный оператор
// hoc - компоненты высшего порядка
// {/*  */} - комментарий в JSX

// Тест, который мы создаём, может состоять из нескольких вопросов



// ~~~~~~~~~~~~~~~~~~~~~~~   Вопросы   ~~~~~~~~~~~~~~~~~~~~~~~~~

// Отличие стрелочной функции в классе от обычной функции ?


// ~~~~~~~~~~~~~~~~~~~~~~~   Возможные ошибки   ~~~~~~~~~~~~~~~~~~~~~~~~~

// Одиночные теги надо закрывать <тег/>