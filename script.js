// Global Variables
let currentUser = null;
let currentTest = null;
let timer = null;
let startTime = null;

// Questions Database
const questionsDB = [
    {
        id: 1,
        question: "Що є вищим джерелом законодавства України?",
        options: [
            "Конституція України",
            "Закони України",
            "Укази Президента",
            "Постанови Кабміну"
        ],
        correct: 0,
        explanation: "Конституція України є вищим джерелом законодавства згідно зі статтею 8 Конституції."
    },
    {
        id: 2,
        question: "Скільки статей містить Конституція України?",
        options: [
            "161",
            "174",
            "200",
            "150"
        ],
        correct: 0,
        explanation: "Конституція України містить 161 статтю."
    },
    {
        id: 3,
        question: "Коли була прийнята чинна Конституція України?",
        options: [
            "28 червня 1996 року",
            "24 серпня 1991 року",
            "1 грудня 1991 року",
            "16 липня 1990 року"
        ],
        correct: 0,
        explanation: "Чинна Конституція України була прийнята 28 червня 1996 року."
    },
    {
        id: 4,
        question: "Хто є гарантом Конституції України?",
        options: [
            "Президент України",
            "Верховна Рада",
            "Конституційний Суд",
            "Уряд"
        ],
        correct: 0,
        explanation: "Президент України є гарантом Конституції згідно зі статтею 102."
    },
    {
        id: 5,
        question: "Який вік необхідний для обрання Президентом України?",
        options: [
            "35 років",
            "30 років",
            "40 років",
            "25 років"
        ],
        correct: 0,
        explanation: "Президентом України може бути обраний громадянин України, який досяг 35 років."
    },
    {
        id: 6,
        question: "Скільки депутатів у Верховній Раді України?",
        options: [
            "450",
            "400",
            "350",
            "500"
        ],
        correct: 0,
        explanation: "Верховна Рада України складається з 450 народних депутатів."
    },
    {
        id: 7,
        question: "На який термін обирається Президент України?",
        options: [
            "5 років",
            "4 роки",
            "6 років",
            "7 років"
        ],
        correct: 0,
        explanation: "Президент України обирається на п'ятирічний термін."
    },
    {
        id: 8,
        question: "Що таке суверенітет держави?",
        options: [
            "Верховенство і незалежність держави",
            "Територіальна цілісність",
            "Демократичний режим",
            "Правова система"
        ],
        correct: 0,
        explanation: "Суверенітет - це верховенство і незалежність держави у внутрішніх та зовнішніх справах."
    },
    {
        id: 9,
        question: "Хто призначає Прем'єр-міністра України?",
        options: [
            "Верховна Рада за поданням Президента",
            "Президент самостійно",
            "Кабінет Міністрів",
            "Конституційний Суд"
        ],
        correct: 0,
        explanation: "Прем'єр-міністра України призначає Верховна Рада за поданням Президента."
    },
    {
        id: 10,
        question: "Які органи належать до законодавчої влади?",
        options: [
            "Верховна Рада",
            "Президент",
            "Кабінет Міністрів",
            "Суди"
        ],
        correct: 0,
        explanation: "Законодавчу владу в Україні здійснює Верховна Рада України."
    },
    {
        id: 11,
        question: "Що гарантує стаття 27 Конституції України?",
        options: [
            "Право на життя",
            "Право на освіту",
            "Право на працю",
            "Право на медичну допомогу"
        ],
        correct: 0,
        explanation: "Стаття 27 Конституції гарантує право на життя."
    },
    {
        id: 12,
        question: "Скільки суддів у Конституційному Суді України?",
        options: [
            "18",
            "15",
            "21",
            "12"
        ],
        correct: 0,
        explanation: "Конституційний Суд України складається з 18 суддів."
    },
    {
        id: 13,
        question: "Що таке правова держава?",
        options: [
            "Держава, де всі підпорядковані закону",
            "Держава з демократичним режимом",
            "Держава з ринковою економікою",
            "Держава з федеративним устроєм"
        ],
        correct: 0,
        explanation: "Правова держава - це держава, де всі органи влади, посадові особи та громадяни підпорядковані закону."
    },
    {
        id: 14,
        question: "Які вибори вважаються загальними?",
        options: [
            "У яких беруть участь усі громадяни, які досягли виборчого віку",
            "Де голосують лише чоловіки",
            "Де голосують лише жінки",
            "Де голосують лише освічені громадяни"
        ],
        correct: 0,
        explanation: "Загальні вибори - це вибори, у яких можуть брати участь усі громадяни, які досягли виборчого віку."
    },
    {
        id: 15,
        question: "Що таке місцеве самоврядування?",
        options: [
            "Право територіальних громад самостійно вирішувати місцеві питання",
            "Органи державної влади на місцях",
            "Представництво центральної влади",
            "Адміністративно-територіальний поділ"
        ],
        correct: 0,
        explanation: "Місцеве самоврядування - це право територіальних громад самостійно вирішувати питання місцевого значення."
    },
    {
        id: 16,
        question: "Який документ регулює діяльність Кабінету Міністрів?",
        options: [
            "Конституція України",
            "Закон 'Про Кабінет Міністрів України'",
            "Укази Президента",
            "Постанови Верховної Ради"
        ],
        correct: 0,
        explanation: "Діяльність Кабінету Міністрів регулюється Конституцією України та Законом 'Про Кабінет Міністрів України'."
    },
    {
        id: 17,
        question: "Що таке імпічмент Президента?",
        options: [
            "Процедура усунення Президента з посади",
            "Тимчасове відсторонення від посади",
            "Дострокові вибори Президента",
            "Кримінальне переслідування Президента"
        ],
        correct: 0,
        explanation: "Імпічмент - це процедура усунення Президента з посади в порядку особливої процедури."
    },
    {
        id: 18,
        question: "Скільки необхідно голосів для прийняття Конституції?",
        options: [
            "2/3 від конституційного складу Верховної Ради",
            "Більшість голосів",
            "3/4 від конституційного складу",
            "Єдиногласно"
        ],
        correct: 0,
        explanation: "Для прийняття Конституції необхідно не менше 2/3 голосів від конституційного складу Верховної Ради."
    },
    {
        id: 19,
        question: "Що таке референдум?",
        options: [
            "Всенародне голосування з важливих питань",
            "Вибори Президента",
            "Парламентські вибори",
            "Місцеві вибори"
        ],
        correct: 0,
        explanation: "Референдум - це всенародне голосування з важливих питань державного значення."
    },
    {
        id: 20,
        question: "Які права людини є невід'ємними?",
        options: [
            "Право на життя, свободу, особисту недоторканність",
            "Соціальні права",
            "Економічні права",
            "Політичні права"
        ],
        correct: 0,
        explanation: "Право на життя, свободу та особисту недоторканність є невід'ємними правами людини."
    },
    {
        id: 21,
        question: "Хто здійснює правосуддя в Україні?",
        options: [
            "Тільки суди",
            "Президент",
            "Верховна Рада",
            "Прокуратура"
        ],
        correct: 0,
        explanation: "Правосуддя в Україні здійснюється виключно судами."
    },
    {
        id: 22,
        question: "Що таке демократія?",
        options: [
            "Влада народу",
            "Влада еліти",
            "Влада одного правителя",
            "Влада військових"
        ],
        correct: 0,
        explanation: "Демократія - це форма правління, заснована на владі народу."
    },
    {
        id: 23,
        question: "Який вік виборчого права в Україні?",
        options: [
            "18 років",
            "21 рік",
            "16 років",
            "25 років"
        ],
        correct: 0,
        explanation: "Виборче право в Україні настає з досягненням 18 років."
    },
    {
        id: 24,
        question: "Що гарантує стаття 34 Конституції?",
        options: [
            "Свободу думки і слова",
            "Право на освіту",
            "Право на працю",
            "Право на житло"
        ],
        correct: 0,
        explanation: "Стаття 34 Конституції гарантує кожному громадянину право на свободу думки і слова."
    },
    {
        id: 25,
        question: "Хто є головою Верховної Ради?",
        options: [
            "Голова Верховної Ради",
            "Президент",
            "Прем'єр-міністр",
            "Голова Конституційного Суду"
        ],
        correct: 0,
        explanation: "Верховну Раду очолює Голова Верховної Ради, який обирається з числа депутатів."
    }
];

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    loadUserData();
    updateStatistics();
});

function initializeApp() {
    // Show home section by default
    showSection('home');
    
    // Set up event listeners
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    console.log('Setting up event listeners...'); // Debug log
    console.log('Login form:', loginForm); // Debug log
    console.log('Register form:', registerForm); // Debug log
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
        console.log('Login form listener attached'); // Debug log
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
        console.log('Register form listener attached'); // Debug log
    }
    
    // Update total questions count
    document.getElementById('total-questions').textContent = questionsDB.length;
}

// Section Navigation
function showSection(sectionName, eventElement) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(`${sectionName}-section`).classList.add('active');
    
    // Update navigation buttons if event is provided
    if (eventElement) {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        eventElement.closest('.nav-btn').classList.add('active');
    }
    
    // Update section-specific content
    if (sectionName === 'stats') {
        updateStatistics();
        loadRecentResults();
        loadLeaderboard();
    } else if (sectionName === 'profile') {
        updateProfile();
    }
}

// User Authentication
function showLoginModal() {
    closeModal('register-modal');
    document.getElementById('login-modal').classList.add('active');
}

function showRegisterModal() {
    closeModal('login-modal');
    document.getElementById('register-modal').classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple authentication (in real app, this would be server-side)
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    
    if (users[username] && users[username].password === password) {
        currentUser = users[username];
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUserInterface();
        closeModal('login-modal');
        showMessage('success', 'Ви успішно увійшли в систему!');
    } else {
        showMessage('error', 'Неправильне ім\'я користувача або пароль');
    }
}

function handleRegister(e) {
    e.preventDefault();
    console.log('Registration form submitted'); // Debug log
    
    const username = document.getElementById('reg-username').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm').value;
    
    console.log('Form data:', { username, email, passwordLength: password?.length }); // Debug log
    
    // Validation
    if (!username) {
        console.log('Username validation failed'); // Debug log
        showMessage('error', 'Введіть ім\'я користувача');
        return;
    }
    
    if (!email) {
        console.log('Email validation failed'); // Debug log
        showMessage('error', 'Введіть email');
        return;
    }
    
    if (!password) {
        console.log('Password validation failed'); // Debug log
        showMessage('error', 'Введіть пароль');
        return;
    }
    
    if (password.length < 6) {
        console.log('Password length validation failed'); // Debug log
        showMessage('error', 'Пароль повинен містити щонайменше 6 символів');
        return;
    }
    
    if (password !== confirmPassword) {
        console.log('Password match validation failed'); // Debug log
        showMessage('error', 'Паролі не співпадають');
        return;
    }
    
    try {
        console.log('Starting registration process'); // Debug log
        const users = JSON.parse(localStorage.getItem('users') || '{}');
        console.log('Current users:', Object.keys(users)); // Debug log
        
        if (users[username]) {
            console.log('Username already exists'); // Debug log
            showMessage('error', 'Користувач з таким іменем вже існує');
            return;
        }
        
        users[username] = {
            username,
            email,
            password,
            createdAt: new Date().toISOString(),
            stats: {
                testsCompleted: 0,
                totalScore: 0,
                bestScore: 0,
                totalTime: 0,
                streak: 0
            }
        };
        
        localStorage.setItem('users', JSON.stringify(users));
        console.log('User saved successfully'); // Debug log
        
        showMessage('success', 'Реєстрація успішна! Тепер ви можете увійти.');
        closeModal('register-modal');
        showLoginModal();
        
        // Clear form
        document.getElementById('register-form').reset();
        
    } catch (error) {
        console.error('Registration error:', error); // Debug log
        showMessage('error', 'Помилка при реєстрації. Спробуйте ще раз.');
    }
}

function loadUserData() {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
        currentUser = JSON.parse(userData);
        updateUserInterface();
    }
}

function updateUserInterface() {
    if (currentUser) {
        document.getElementById('user-name').textContent = currentUser.username;
        document.getElementById('login-btn').textContent = 'Вийти';
        document.getElementById('login-btn').onclick = logout;
    } else {
        document.getElementById('user-name').textContent = 'Гість';
        document.getElementById('login-btn').textContent = 'Увійти';
        document.getElementById('login-btn').onclick = showLoginModal;
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUserInterface();
    showMessage('info', 'Ви вийшли з системи');
}

// Test Management
function startTest() {
    if (!currentUser) {
        showMessage('error', 'Для проходження тесту необхідно увійти в систему');
        showLoginModal();
        return;
    }
    
    // Initialize test
    currentTest = {
        questions: [...questionsDB].sort(() => Math.random() - 0.5).slice(0, 25),
        currentQuestion: 0,
        answers: [],
        startTime: Date.now(),
        timeSpent: 0
    };
    
    // Show test section
    showSection('test');
    
    // Start timer
    startTimer();
    
    // Display first question
    displayQuestion();
}

function displayQuestion() {
    const question = currentTest.questions[currentTest.currentQuestion];
    
    // Update question counter
    document.getElementById('question-counter').textContent = 
        `Питання ${currentTest.currentQuestion + 1} з ${currentTest.questions.length}`;
    
    // Update progress bar
    const progress = ((currentTest.currentQuestion + 1) / currentTest.questions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    
    // Display question text
    document.getElementById('question-text').textContent = question.question;
    
    // Display answer options
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        answerDiv.innerHTML = `
            <input type="radio" name="answer" value="${index}" id="answer-${index}">
            <label for="answer-${index}">${option}</label>
        `;
        
        answerDiv.addEventListener('click', function() {
            selectAnswer(index);
        });
        
        answersContainer.appendChild(answerDiv);
    });
    
    // Update navigation buttons
    document.getElementById('prev-btn').disabled = currentTest.currentQuestion === 0;
    document.getElementById('next-btn').style.display = 
        currentTest.currentQuestion === currentTest.questions.length - 1 ? 'none' : 'block';
    document.getElementById('finish-btn').style.display = 
        currentTest.currentQuestion === currentTest.questions.length - 1 ? 'block' : 'none';
    
    // Restore previous answer if exists
    if (currentTest.answers[currentTest.currentQuestion] !== undefined) {
        selectAnswer(currentTest.answers[currentTest.currentQuestion]);
    }
}

function selectAnswer(answerIndex) {
    // Update visual selection
    document.querySelectorAll('.answer-option').forEach((option, index) => {
        option.classList.toggle('selected', index === answerIndex);
        option.querySelector('input').checked = index === answerIndex;
    });
    
    // Store answer
    currentTest.answers[currentTest.currentQuestion] = answerIndex;
}

function nextQuestion() {
    if (currentTest.currentQuestion < currentTest.questions.length - 1) {
        currentTest.currentQuestion++;
        displayQuestion();
    }
}

function previousQuestion() {
    if (currentTest.currentQuestion > 0) {
        currentTest.currentQuestion--;
        displayQuestion();
    }
}

function finishTest() {
    stopTimer();
    
    // Calculate results
    const results = calculateResults();
    
    // Save results
    saveTestResults(results);
    
    // Show results modal
    showResults(results);
}

function calculateResults() {
    let correctCount = 0;
    const errors = [];
    
    currentTest.questions.forEach((question, index) => {
        const userAnswer = currentTest.answers[index];
        const isCorrect = userAnswer === question.correct;
        
        if (isCorrect) {
            correctCount++;
        } else {
            errors.push({
                question: question.question,
                userAnswer: question.options[userAnswer] || 'Не відповів',
                correctAnswer: question.options[question.correct],
                explanation: question.explanation
            });
        }
    });
    
    const percentage = Math.round((correctCount / currentTest.questions.length) * 100);
    const timeSpent = Math.round((Date.now() - currentTest.startTime) / 1000);
    
    return {
        totalQuestions: currentTest.questions.length,
        correctCount,
        percentage,
        timeSpent,
        errors,
        timestamp: new Date().toISOString()
    };
}

function saveTestResults(results) {
    if (!currentUser) return;
    
    // Update user stats
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const user = users[currentUser.username];
    
    user.stats.testsCompleted++;
    user.stats.totalScore += results.percentage;
    user.stats.bestScore = Math.max(user.stats.bestScore, results.percentage);
    user.stats.totalTime += results.timeSpent;
    
    // Update streak
    const today = new Date().toDateString();
    const lastTest = user.lastTestDate ? new Date(user.lastTestDate).toDateString() : null;
    
    if (lastTest !== today) {
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        if (lastTest === yesterday) {
            user.stats.streak++;
        } else {
            user.stats.streak = 1;
        }
    }
    
    user.lastTestDate = results.timestamp;
    
    // Save test result
    if (!user.testResults) {
        user.testResults = [];
    }
    user.testResults.push(results);
    
    // Keep only last 10 results
    if (user.testResults.length > 10) {
        user.testResults = user.testResults.slice(-10);
    }
    
    localStorage.setItem('users', JSON.stringify(users));
    
    // Update current user data
    currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
}

function showResults(results) {
    // Update result summary
    document.getElementById('final-score').textContent = `${results.percentage}%`;
    document.getElementById('correct-count').textContent = results.correctCount;
    document.getElementById('total-count').textContent = results.totalQuestions;
    document.getElementById('total-time').textContent = formatTime(results.timeSpent);
    
    // Show error analysis
    const errorList = document.getElementById('error-list');
    errorList.innerHTML = '';
    
    if (results.errors.length > 0) {
        results.errors.forEach(error => {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-item';
            errorDiv.innerHTML = `
                <h4>${error.question}</h4>
                <p><strong>Ваша відповідь:</strong> ${error.userAnswer}</p>
                <p><strong>Правильна відповідь:</strong> ${error.correctAnswer}</p>
                <p><strong>Пояснення:</strong> ${error.explanation}</p>
            `;
            errorList.appendChild(errorDiv);
        });
    } else {
        errorList.innerHTML = '<p>Відмінно! У вас немає помилок.</p>';
    }
    
    // Show recommendations
    const recommendations = document.getElementById('recommendations-content');
    let recommendationText = '';
    
    if (results.percentage >= 90) {
        recommendationText = 'Чудовий результат! Ви добре володієте матеріалом з конституційного права.';
    } else if (results.percentage >= 70) {
        recommendationText = 'Хороший результат! Рекомендуємо повторити теми, де були допущені помилки.';
    } else if (results.percentage >= 50) {
        recommendationText = 'Задовільний результат. Потрібно більше уваги приділити вивченню конституційного права.';
    } else {
        recommendationText = 'Рекомендуємо систематично підготуватися та повторити основні положення Конституції.';
    }
    
    recommendations.innerHTML = `<p>${recommendationText}</p>`;
    
    // Show modal
    document.getElementById('results-modal').classList.add('active');
}

// Timer Functions
function startTimer() {
    startTime = Date.now();
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

function updateTimer() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('timer').textContent = formatTime(elapsed);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Statistics Functions
function updateStatistics() {
    if (!currentUser) {
        // Show default stats
        document.getElementById('tests-completed').textContent = '0';
        document.getElementById('success-rate').textContent = '0%';
        document.getElementById('avg-time').textContent = '00:00';
        document.getElementById('streak').textContent = '0';
        return;
    }
    
    const stats = currentUser.stats;
    const avgScore = stats.testsCompleted > 0 ? 
        Math.round(stats.totalScore / stats.testsCompleted) : 0;
    const avgTime = stats.testsCompleted > 0 ? 
        Math.round(stats.totalTime / stats.testsCompleted) : 0;
    
    document.getElementById('tests-completed').textContent = stats.testsCompleted;
    document.getElementById('success-rate').textContent = `${avgScore}%`;
    document.getElementById('avg-time').textContent = formatTime(avgTime);
    document.getElementById('streak').textContent = stats.streak;
    
    // Update global stats
    updateGlobalStatistics();
}

function updateGlobalStatistics() {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const userCount = Object.keys(users).length;
    
    let totalTests = 0;
    let totalScore = 0;
    
    Object.values(users).forEach(user => {
        totalTests += user.stats.testsCompleted;
        totalScore += user.stats.totalScore;
    });
    
    const avgScore = totalTests > 0 ? Math.round(totalScore / totalTests) : 0;
    
    document.getElementById('total-users').textContent = userCount;
    document.getElementById('avg-score').textContent = `${avgScore}%`;
}

function loadRecentResults() {
    if (!currentUser || !currentUser.testResults) {
        document.getElementById('recent-results-list').innerHTML = 
            '<p>Поки що немає результатів</p>';
        return;
    }
    
    const recentResultsList = document.getElementById('recent-results-list');
    recentResultsList.innerHTML = '';
    
    currentUser.testResults.slice(-5).reverse().forEach(result => {
        const resultDiv = document.createElement('div');
        resultDiv.className = 'result-item';
        
        const date = new Date(result.timestamp).toLocaleDateString('uk-UA');
        const time = formatTime(result.timeSpent);
        
        resultDiv.innerHTML = `
            <div>
                <strong>${result.percentage}%</strong> (${result.correctCount}/${result.totalQuestions})
            </div>
            <div>
                <small>${date} • ${time}</small>
            </div>
        `;
        
        recentResultsList.appendChild(resultDiv);
    });
}

function loadLeaderboard() {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const leaderboard = [];
    
    Object.values(users).forEach(user => {
        if (user.stats.testsCompleted > 0) {
            leaderboard.push({
                username: user.username,
                bestScore: user.stats.bestScore,
                testsCompleted: user.stats.testsCompleted
            });
        }
    });
    
    // Sort by best score
    leaderboard.sort((a, b) => b.bestScore - a.bestScore);
    
    const leaderboardList = document.getElementById('leaderboard-list');
    leaderboardList.innerHTML = '';
    
    if (leaderboard.length === 0) {
        leaderboardList.innerHTML = '<p>Поки що немає даних для таблиці лідерів</p>';
        return;
    }
    
    leaderboard.slice(0, 10).forEach((user, index) => {
        const userDiv = document.createElement('div');
        userDiv.className = 'leaderboard-item';
        
        let medal = '';
        if (index === 0) medal = '🥇';
        else if (index === 1) medal = '🥈';
        else if (index === 2) medal = '🥉';
        else medal = `${index + 1}.`;
        
        userDiv.innerHTML = `
            <div>
                <strong>${medal} ${user.username}</strong>
            </div>
            <div>
                <strong>${user.bestScore}%</strong> • ${user.testsCompleted} тестів
            </div>
        `;
        
        leaderboardList.appendChild(userDiv);
    });
}

function updateProfile() {
    if (!currentUser) {
        document.getElementById('profile-name').textContent = 'Гість';
        document.getElementById('profile-email').textContent = 'Не авторизовано';
        return;
    }
    
    document.getElementById('profile-name').textContent = currentUser.username;
    document.getElementById('profile-email').textContent = currentUser.email;
    
    // Update achievements
    updateAchievements();
}

function updateAchievements() {
    if (!currentUser) return;
    
    const achievements = document.querySelectorAll('.achievement');
    const stats = currentUser.stats;
    
    // First test achievement
    if (stats.testsCompleted >= 1) {
        achievements[0].classList.remove('locked');
        achievements[0].classList.add('unlocked');
    }
    
    // Perfect score achievement
    if (stats.bestScore === 100) {
        achievements[1].classList.remove('locked');
        achievements[1].classList.add('unlocked');
    }
    
    // Master of law achievement
    let perfectTests = 0;
    if (currentUser.testResults) {
        perfectTests = currentUser.testResults.filter(r => r.percentage >= 90).length;
    }
    
    if (perfectTests >= 10) {
        achievements[2].classList.remove('locked');
        achievements[2].classList.add('unlocked');
    }
}

// Utility Functions
function showMessage(type, text) {
    // Create message element
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.style.position = 'fixed';
    message.style.top = '20px';
    message.style.right = '20px';
    message.style.zIndex = '9999';
    message.style.maxWidth = '400px';
    message.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${text}</span>
    `;
    
    // Add to body
    document.body.appendChild(message);
    
    // Remove after 3 seconds
    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Close modals when clicking outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (currentTest && document.getElementById('test-section').classList.contains('active')) {
        if (e.key === 'ArrowLeft' && currentTest.currentQuestion > 0) {
            previousQuestion();
        } else if (e.key === 'ArrowRight' && currentTest.currentQuestion < currentTest.questions.length - 1) {
            nextQuestion();
        } else if (e.key >= '1' && e.key <= '4') {
            const answerIndex = parseInt(e.key) - 1;
            if (answerIndex < currentTest.questions[currentTest.currentQuestion].options.length) {
                selectAnswer(answerIndex);
            }
        }
    }
});
