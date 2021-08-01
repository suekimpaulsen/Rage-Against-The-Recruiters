const router = require('express').Router();
const { User, JobDetails, surveyAnswers, Questions, JobQuestions } = require('../../models');

router.get('/recruiter', (req, res) => {
    // the ID of the recruiter will be passed in through the body of the request so you can use a WHERE clause with it
});

router.get('/:id', (req, res) => {
    // id refers to the id of the post
});

router.get('/', async (req, res) => {
    const opportunities = await JobDetails.findAll({
        // nest: true,
        // raw: true,
        attributes: [
            'job_detailsid_pk',
            'recruiterid_fk',
            'job_questionsid_fk',
            'job_classification',
            'company',
            'job_title',
            'job_description',
            'base_salary',
            'bonus_flat',
            'bonus_percentage',
            'retirement_plan_avail',
            'employer_matching_flat',
            'employer_matching_percentage',
            'paid_vacation_days',
            'paid_sick_days',
            'paid_holidays',
            'medical_coverage_avail',
            'family_coverage_avail',
            'medical_coverage_employer_percentage',
            'dental_coverage_avail',
            'vision_coverage_avail',
            'life_insurance_avail',
            'spouse_life_insurance_avail',
            'add_benefits_employer_percentage'
        ],
        include: [
            {
                model: surveyAnswers,
                attributes: [
                    //             'survey_answers_pk',
                    'questionsid_fk',
                    //             'job_detailsid_fk',
                    'answer',
                    'answer_score'],
                include: [
                    {
                        model: Questions,
                    }
                ]
            }
        ]
    })




    res.json({ opportunities });
    //     res.json({ opportunities });
    // });

    // res.render('talent-user', { opportunities });
});

router.post('/submit/:id', (req, res) => {
    res.locals.username = req.session.username;
    User.create({
    });
});



module.exports = router;
