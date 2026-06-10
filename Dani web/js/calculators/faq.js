document.addEventListener('DOMContentLoaded', function() {

// FAQ Accordion Functionality

const faqQuestions = document.querySelectorAll('.faq-question')


    faqQuestions.forEach(question => {

    question.addEventListener('click', () => {

        // Toggle active class on question

        question.classList.toggle('active')


            // Get the answer element

        const answer = question.nextElementSibling


            // Toggle answer visibility

        if (question.classList.contains('active')) {

            answer.classList.add('show');

            answer.style.maxHeight = answer.scrollHeight + 'px';

        } else {

            answer.classList.remove('show');

            answer.style.maxHeight = '0';

        }



        // Close other open FAQs if needed

        // faqQuestions.forEach(item => {

        //     if (item !== question) {

        //         item.classList.remove('active');

        //         item.nextElementSibling.classList.remove('show');

        //         item.nextElementSibling.style.maxHeight = '0';

        //     }

        // });

    });

})


    // Optional: Category Filtering

const categoryBtns = document.querySelectorAll('.category-btn')


    categoryBtns.forEach(btn => {

    btn.addEventListener('click', () => {

        // Remove active class from all buttons

        categoryBtns.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button

        btn.classList.add('active')


            const category = btn.dataset.category;

        const faqItems = document.querySelectorAll('.faq-item')


            faqItems.forEach(item => {

            if (category === 'all' || item.dataset.category === category) {

                item.style.display = 'block';

            } else {

                item.style.display = 'none';

            }

        });

    });

});





});



