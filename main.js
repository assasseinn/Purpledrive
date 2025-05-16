// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeToggle.textContent = isDark ? '🌙' : '☀️';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Onboarding Form
const onboardingForm = document.getElementById('onboarding-form');
const pitchOutput = document.getElementById('pitch-output');
const pitchContent = document.getElementById('pitch-content');

onboardingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const experience = document.getElementById('experience').value;

    const pitch = generateElevatorPitch(name, role, experience);
    pitchContent.innerHTML = pitch;
    pitchOutput.classList.remove('hidden');
});

function generateElevatorPitch(name, role, experience) {
    const roleTitles = {
        developer: 'Software Developer',
        qa: 'QA Engineer',
        data: 'Data Analyst',
        infra: 'Infrastructure Engineer',
        cybersec: 'Cyber Security Specialist'
    };

    return `
        <p>Hi, I'm ${name}, a ${roleTitles[role]} with ${experience} years of experience. I'm passionate about delivering high-quality solutions and continuously learning new technologies.</p>
        <p>In my career, I've focused on [specific achievement or skill relevant to the role]. I'm particularly interested in joining TCS because of its commitment to innovation and global impact.</p>
        <p>I'm excited about the opportunity to contribute to TCS's mission while growing my expertise in [specific area relevant to the role].</p>
    `;
}

// Origin Story Form
const originStoryForm = document.getElementById('origin-story-form');
const storyOutput = document.getElementById('story-output');
const storyContent = document.getElementById('story-content');

originStoryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const situation = document.getElementById('situation').value;
    const strength = document.getElementById('strength').value;
    const success = document.getElementById('success').value;

    const story = generateOriginStory(situation, strength, success);
    storyContent.innerHTML = story;
    storyOutput.classList.remove('hidden');
});

function generateOriginStory(situation, strength, success) {
    return `
        <h4>Situation</h4>
        <p>${situation}</p>
        <h4>Strength Demonstrated</h4>
        <p>${strength}</p>
        <h4>Success Achieved</h4>
        <p>${success}</p>
    `;
}

// Strengths & Weaknesses
const generatePlanBtn = document.getElementById('generate-plan');
const planOutput = document.getElementById('plan-output');
const planContent = document.getElementById('plan-content');

generatePlanBtn.addEventListener('click', () => {
    const selectedStrengths = Array.from(document.querySelectorAll('.strength-options input:checked'))
        .map(input => input.value);
    const selectedWeaknesses = Array.from(document.querySelectorAll('.weakness-options input:checked'))
        .map(input => input.value);

    const plan = generateImprovementPlan(selectedStrengths, selectedWeaknesses);
    planContent.innerHTML = plan;
    planOutput.classList.remove('hidden');
});

function generateImprovementPlan(strengths, weaknesses) {
    const strengthText = strengths.length > 0 
        ? `<h4>Your Key Strengths</h4><ul>${strengths.map(s => `<li>${s}</li>`).join('')}</ul>`
        : '';
    
    const weaknessText = weaknesses.length > 0
        ? `<h4>Areas for Improvement</h4><ul>${weaknesses.map(w => `<li>${w}</li>`).join('')}</ul>`
        : '';

    return `
        ${strengthText}
        ${weaknessText}
        <h4>Recommended Action Plan</h4>
        <ul>
            <li>Set specific learning goals for each area of improvement</li>
            <li>Allocate dedicated time for skill development</li>
            <li>Seek mentorship and feedback</li>
            <li>Track progress regularly</li>
        </ul>
    `;
}

// STAR Answers
const starForm = document.getElementById('star-form');
const starOutput = document.getElementById('star-output');
const starContent = document.getElementById('star-content');

starForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const situation = document.getElementById('situation-star').value;
    const task = document.getElementById('task').value;
    const action = document.getElementById('action').value;
    const result = document.getElementById('result').value;

    const starAnswer = generateSTARAnswer(situation, task, action, result);
    starContent.innerHTML = starAnswer;
    starOutput.classList.remove('hidden');
});

function generateSTARAnswer(situation, task, action, result) {
    return `
        <h4>Situation</h4>
        <p>${situation}</p>
        <h4>Task</h4>
        <p>${task}</p>
        <h4>Action</h4>
        <p>${action}</p>
        <h4>Result</h4>
        <p>${result}</p>
    `;
}

// Mock Interview
const startInterviewBtn = document.getElementById('start-interview');
const stopInterviewBtn = document.getElementById('stop-interview');
const interviewContainer = document.getElementById('interview-container');
const questionDisplay = document.getElementById('question-display');
const mockAnswer = document.getElementById('mock-answer');
const submitAnswerBtn = document.getElementById('submit-answer');
const interviewFeedback = document.getElementById('interview-feedback');
const feedbackContent = document.getElementById('feedback-content');

let timer;
let seconds = 0;
let currentQuestionIndex = 0;

const questions = [
    "Tell me about yourself.",
    "What are your greatest strengths?",
    "What is your greatest weakness?",
    "Why do you want to work at TCS?",
    "Where do you see yourself in 5 years?",
    "Describe a challenging project you worked on.",
    "How do you handle stress and pressure?",
    "What is your leadership style?",
    "How do you stay updated with technology?",
    "Describe a time when you had to work with a difficult team member."
];

startInterviewBtn.addEventListener('click', () => {
    startInterviewBtn.classList.add('hidden');
    stopInterviewBtn.classList.remove('hidden');
    interviewContainer.classList.remove('hidden');
    interviewFeedback.classList.add('hidden');
    startTimer();
    displayQuestion();
});

stopInterviewBtn.addEventListener('click', () => {
    stopInterview();
    showFeedback();
});

function startTimer() {
    timer = setInterval(() => {
        seconds++;
        document.getElementById('timer').textContent = `Time: ${formatTime(seconds)}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionDisplay.textContent = questions[currentQuestionIndex];
        mockAnswer.value = '';
    } else {
        stopInterview();
        showFeedback();
    }
}

function stopInterview() {
    stopTimer();
    startInterviewBtn.classList.remove('hidden');
    stopInterviewBtn.classList.add('hidden');
    interviewContainer.classList.add('hidden');
}

function showFeedback() {
    const feedback = generateFeedback();
    feedbackContent.innerHTML = feedback;
    interviewFeedback.classList.remove('hidden');
}

function generateFeedback() {
    return `
        <h4>Interview Summary</h4>
        <p>Total time: ${formatTime(seconds)}</p>
        <p>Questions answered: ${currentQuestionIndex}</p>
        <h4>Tips for Improvement</h4>
        <ul>
            <li>Practice maintaining eye contact</li>
            <li>Use the STAR method for behavioral questions</li>
            <li>Keep answers concise and focused</li>
            <li>Prepare specific examples for common questions</li>
        </ul>
    `;
}

submitAnswerBtn.addEventListener('click', () => {
    if (mockAnswer.value.trim()) {
        currentQuestionIndex++;
        displayQuestion();
    }
});

// Character Counter for Textareas
document.querySelectorAll('textarea').forEach(textarea => {
    const counter = document.createElement('div');
    counter.className = 'char-counter';
    textarea.parentNode.appendChild(counter);

    textarea.addEventListener('input', () => {
        const maxLength = textarea.getAttribute('maxlength') || 500;
        const remaining = maxLength - textarea.value.length;
        counter.textContent = `${remaining} characters remaining`;
    });
}); 