import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { GrHostMaintenance } from 'react-icons/gr';
import  { BiBath } from 'react-icons/bi'
import { FaGripfire } from  'react-icons/fa'
import { GiBrainFreeze, GiFireplace } from 'react-icons/gi'
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Kotlovi/Peći/Kamini',
		description: 'Nudimo najvišu razinu sigurnosti i povjerenja u kupoprodaji',
		icon: iconStyle(GiFireplace),
		imgClass: 'one',
	},
	{
		name: 'Bojleri/Spremnici',
		description: 'Naši proizvodi su laki za korištenje i integriranje',
		icon: iconStyle(FaGripfire),
		imgClass: 'two',
	},
	{
		name: 'Radijatori',
		description: 'Ukoliko vas muči tehnički ili dizajn problem smo spremni ponuditi svoju pomoć',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: 'Klimatizacija/Ventilacija',
		description: 'Naš tim je uvijek dostupan zatreba li vam nešto u neprilično vrijeme',
		icon: iconStyle(GiBrainFreeze),
		imgClass: 'four',
	},
	{
		name: 'Oprema za kupaonice',
		description: 'Nudimo najveći omjer cijene/usluge što nam tržište omogućuje',
		icon: iconStyle(BiBath),
		imgClass: 'five',
	},
	{
		name: 'Cijenu',
		description:
			'Također su nam proizvodi svjetski standardizirani što znaći kupujete li iz Kine ćete dobiti istu uslugu ',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
];
