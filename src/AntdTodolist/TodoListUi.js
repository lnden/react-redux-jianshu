import React from 'react'
import {Input,Button,List} from 'antd'

const ListItem = List.Item;

const TodoListUi = (props) => {
	return (
		<div style={{margin:'10px'}}>
		<div>
			<Input
				value={props.inputValue}
				placeholder="todo info"
				style={{width:300,marginRight:'10px'}}
				onChange={props.handleInputChange}
			/>
			<Button type="primary" onClick={props.handleSubmit}>提交</Button>
		</div>
		<List
			style={{marginTop:'10px',width:'300px'}}
			bordered
			dataSource={props.list}
			renderItem={(item,index) => {
					return (
						<ListItem>
							<span>{item}</span>
							<Button type="primary" onClick={()=>props.handleDeteled(index)}>删除</Button>
						</ListItem>
					)
				}
			}
		/>
		</div>
	)
}

export default TodoListUi