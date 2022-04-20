import React from 'react';
import Link from 'next/link';
import {
	AppBar,
	Avatar,
	Box,
	Button,
	Container,
	Divider,
	IconButton,
	Stack,
	Toolbar,
	Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const sections = ['About', 'Portfolio', 'Contact', 'Blog'];

type Props = {
	active: boolean;
	setActive: any;
};

const Header = ({ active, setActive }: Props) => {
	const handleCheck = () => {
		setActive(!active);
	};

	const handleNav = () => {
		setActive(false);
	};

	return (
		<AppBar sx={{ padding: '20px 0' }} position='fixed'>
			<Container>
				<Toolbar>
					<Stack
						spacing={1.5}
						direction='row'
						alignItems='center'
						divider={
							<Divider
								orientation='vertical'
								flexItem
							/>
						}
						sx={{ flexGrow: 1 }}
					>
						<Avatar alt='Scott Duller' src='/logo.svg' />
						<Stack>
							<Typography
								variant='h5'
								noWrap
								component='h1'
							>
								Scott Duller
							</Typography>
							<Typography
								variant='body2'
								noWrap
								sx={{ flexGrow: 1 }}
								component='h2'
							>
								Web Developer
							</Typography>
						</Stack>
					</Stack>
					<Box
						sx={{
							display: { xs: 'none', md: 'flex' },
						}}
					>
						{sections.map((section) => (
							<Button
								key={section}
								sx={{
									my: 2,
									display: 'block',
									color: 'white',
								}}
							>
								{section}
							</Button>
						))}
					</Box>
					<Box
						sx={{
							display: { xs: 'flex', md: 'none' },
						}}
					>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='end'
							// sx={{ ...(open && { display: 'none' }) }}
						>
							<MenuIcon fontSize='large' />
						</IconButton>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;
