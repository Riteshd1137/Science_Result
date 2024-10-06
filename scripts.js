document.addEventListener('DOMContentLoaded', () => {
    const students = [
        { name: 'Gaurav Talkhe', marks: 8 },
        { name: 'Nilesh Rajput', marks: 9 },
        { name: 'Karan Khairnar', marks: 15 },
        { name: 'Prathamesh Gaikwad', marks: 16},
        { name: 'Krishna Nikam', marks: 16 },
        { name: 'Sarthak Pagare', marks: 20 },
        { name: 'Sai Patil', marks: 22 },
        { name: 'Sairaj Ghodke', marks: 23 },
        { name: 'Yash Shinde', marks: 25 },
        { name: 'Sakshi Patil', marks: 28 },
        { name: 'Om Mali', marks: 26 },
        { name: 'Prathamesh Nikam', marks: 27 },
        { name: 'Aadrsh Sing', marks: 28 },
        { name: 'Jagruti Patil', marks: 30 },
        { name: 'Neha Shinde', marks: 29 },
        { name: 'Rupesh Mistri', marks: 29 },
        { name: 'Yash Mahajan', marks: 29},
        { name: 'Tanvi Desale', marks: 31},
        { name: 'Sidhika Pagare', marks: 32},
        { name: 'Suraj Somvanshi', marks: 33},
        { name: 'Vinit Salve', marks: 34 },
        { name: 'Vyankatesh Badhe', marks: 35},
        { name: 'Sai Somase', marks: 35 },
        { name: 'Pallavi Wankhede', marks: 36},
        { name: 'Yogesh Mahajan', marks: 36 },
        { name: 'Dhruv Borse', marks: 36},
        { name: 'Priyanka Patil', marks: 37 },
        { name: 'Lalit Patil', marks: 37 },
        { name: 'Sakshi Pawar', marks: 37 },
        { name: 'Sarthak Labde', marks: 37},
        { name: 'Rajnandini Avachar', marks: 38 },
        { name: 'Kunal Patil', marks: 38 },
        { name: 'Atharv Mahale', marks: 38},
        { name: 'Mohini Bhamre', marks: 38 },
        { name: 'Mamta Patil', marks: 39 },
        { name: 'Jatin Wagh', marks: 39 },
        { name: 'Apeksha Tingle', marks: 39 },
        { name: 'Pranav Koli', marks: 40},
    ];

    function speak(message) {
        if ('speechSynthesis' in window) {
            const synth = window.speechSynthesis;
            const utterThis = new SpeechSynthesisUtterance(message);
            synth.speak(utterThis);
        } else {
            console.log('Speech synthesis not supported');
        }
    }

    // Play welcome message when the page loads
    const welcomeMessage = "Well-come-- I hope so you are well... First Enter Your First Name and Last name and then see result. All the Best.";
    speak(welcomeMessage);

    window.displayResult = function() {
        const nameInput = document.getElementById('student-name').value.trim();
        const studentResultDiv = document.getElementById('student-result');

        if (!nameInput) {
            const emptyInputMessage = "Please enter a name to search.";
            studentResultDiv.innerHTML = `<p>${emptyInputMessage}</p>`;
            speak(emptyInputMessage);
            return;
        }

        const student = students.find(s => s.name.toLowerCase() === nameInput.toLowerCase());

        if (student) {
            let message;
            if (student.marks >= 39 && student.marks <= 40) {
                message = "Ohhhh Great Job Congratulations.... Keep it up.";
            } else if (student.marks <= 38 && student.marks > 30) {
                message = "Congratulations All the Best For Next Exam.";
            } else if (student.marks <= 30 && student.marks > 25) {
                message = "Good.. All the best For Next Exam.";
            } else if (student.marks <= 25) {
                message = "Ohhh no Better Luck Next Time.";
            }

            studentResultDiv.innerHTML = `<p>Name: ${student.name}</p><p>Marks: ${student.marks}</p><p>${message}</p>`;
            speak(message);
        } else {
            const notFoundMessage = "Student not found. Please check the name and try again.";
            studentResultDiv.innerHTML = `<p>${notFoundMessage}</p>`;
            speak(notFoundMessage);
        }
    }

    // Create bar chart for students with marks greater than 30
    function createBarChart() {
        try {
            const topStudents = students.filter(s => s.marks > 30);
            const ctx = document.getElementById('rankingChart').getContext('2d');
            const chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: topStudents.map(s => s.name),
                    datasets: [{
                        label: 'Marks',
                        data: topStudents.map(s => s.marks),
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 40
                        }
                    }
                }
            });
        } catch (error) {
            console.error('Error creating chart:', error);
        }
    }

    createBarChart();
});
