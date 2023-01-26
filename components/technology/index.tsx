interface Props {
	text: string
	icon: React.FunctionComponent<{ size: number; color: string }>
	color: string
}

export default function Technology(props: Props) {
	const { text, color, icon: Icon } = props

	return (
		<div className="flex flex-col items-center justify-center gap-1">
			<Icon size={50} color={color} />
			<h3>{text}</h3>
		</div>
	)
}
