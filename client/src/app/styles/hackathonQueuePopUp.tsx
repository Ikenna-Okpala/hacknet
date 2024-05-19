import ReactModal from 'react-modal';
import React, {FC} from 'react';

const HackathonQueueForm = () => {
    const [num_hackers, setNumHackers] = React.useState(0);
    const [length, setLength] = React.useState(0);
    const [experience_level, setExperience] = React.useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        < form onSubmit={handleSubmit}>
            <label>
                How many hackers do you want in your team?
                <input type="number" value={num_hackers} onChange={(e) => setNumHackers(parseInt(e.target.value))} />
            </label>
            <label>
                How long do you want to hack for?
                <input type="number" value={length} onChange={(e) => setLength(parseInt(e.target.value))} />
            </label>
            <label>
                What experience level?
                <input type="text" value={experience_level} onChange={(e) => setExperience(e.target.value)} />
            </label>
        </form>
    );
};
