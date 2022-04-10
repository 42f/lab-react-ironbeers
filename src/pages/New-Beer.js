import { postData } from '../api/beer-api'
import { useState } from "react";
import { Button, Input, InputNumber } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


import './New-Beer.css'

const NewBeer = () => {

	const { TextArea } = Input;

	const [postSuccess, setPostSuccess] = useState(false);
	const [postError, setPostError] = useState('');

	/* FORM STATES  ------------------------------------------------------------*/
	const [name, setName] = useState('');
	const [tagline, setTagline] = useState('');
	const [description, setDescription] = useState('');
	const [firstBrewed, setFirstBrewed] = useState('');
	const [brewersTips, setBrewersTips] = useState('');
	const [attenuationLevel, setAttenuationLevel] = useState(0);
	const [contributedBy, setContributedBy] = useState('');
	const [formError, setFormError] = useState(null);

	/* FORM HANDLERS  ---------------------------------------------------------*/
	const handleChangeName = e => setName(e.target.value);
	const handleChangeTagline = e => setTagline(e.target.value);
	const handleChangeDescription = e => setDescription(e.target.value);
	const handleChangeFirstBrewed = e => setFirstBrewed(e.target.value);
	const handleChangeBrewersTips = e => setBrewersTips(e.target.value);
	const handleChangeAttenuationLevel = e => setAttenuationLevel(e);
	const handleChangeContributedBy = e => setContributedBy(e.target.value);

	const handleSubmit = async e => {
		e.preventDefault();
		setFormError(null);
		if (postSuccess) {
			return setFormError('Already send :)')
		}
		if (!name?.length ||
			!tagline?.length ||
			!description?.length ||
			!firstBrewed?.length ||
			!brewersTips?.length ||
			!contributedBy?.length) {
			return setFormError('All fields are mandatory')
		}
		const data = {
			name,
			tagline,
			description,
			first_brewed: firstBrewed,
			brewers_tips: brewersTips,
			attenuation_level: attenuationLevel,
			contributed_by: contributedBy,
		}
		console.log(
			'DATA',
			data
		);
		await postData('https://ih-beers-api2.herokuapp.com/beers/new', data, setPostSuccess, setPostError);
	}

	/* RENDER  -----------------------------------------------------------------*/
	return (
		<>
			<form className="NewBeerForm" onSubmit={handleSubmit}>
				{formError && <p className='formError formErrorMessage'>{formError}</p>}
				{postError && <p className='formError formErrorMessage'>{postError}</p>}
				{postSuccess && <h1> ✅ </h1>}
				<label className={(formError && !name.length && 'formError') || ''}>Name</label>
				<p>
					<Input  value={name} name="name" type="text" onChange={handleChangeName}/>
				</p>
				<label className={(formError  && !tagline.length && 'formError') || ''}>Tagline</label>
				<p>
					<Input  value={tagline} name="tagline" type="text" onChange={handleChangeTagline}/>
				</p>
				<label className={(formError  && !description.length && 'formError') || ''}>Description</label>
				<p>
					<TextArea value={description} name="description" rows={6} maxLength={256} onChange={handleChangeDescription} />
				</p>
				<label className={(formError  && !firstBrewed.length && 'formError') || ''}>First brewed</label>
				<p>
					<Input  value={firstBrewed} name="first_brewed" type="text" onChange={handleChangeFirstBrewed}/>
				</p>
				<label className={(formError  && !brewersTips.length && 'formError') || ''}>Brewers tips</label>
				<p>
					<Input  value={brewersTips} name="brewers_tips" type="text" onChange={handleChangeBrewersTips}/>
				</p>
				<label>Attenuation level</label>
				<InputNumber value={attenuationLevel} name="attenuation_level" min={0} type="text" onChange={handleChangeAttenuationLevel} />
				<label className={(formError  && !contributedBy.length && 'formError') || ''}>Contributed by</label>
				<p>
					<Input  value={contributedBy} name="contributed_by" type="text" onChange={handleChangeContributedBy}/>
				</p>

				{postSuccess && <h1> ✅ </h1>}
				<Button type="primary" onClick={handleSubmit}>Create</Button>
			</form>

		</>
	)
}

export default NewBeer
