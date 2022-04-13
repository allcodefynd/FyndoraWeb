import $ from 'jquery'; 

(function(){
    var words = [
        'BUSINESS SOLUTIONS',
        'MOBILE APPLICATIONS',
        'DATA ANALYTICS',
        'EDUCATION MANAGEMENT',
        'SOFTWARE  TESTING',
        ], i = 0;
    setInterval(function(){
        $('#changingword').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 9000);
      
})();
(function(){
    var words = [
        "Our strategists offer innovative and singular solutions for each project to help businesses meet their objectives cost-effectively. Our experts analyse all aspects to identify execution gaps and provide optimised plans to meet those particular needs. We combine advanced technology with radical ideas to empower businesses to reinvent themselves.",
        "Whether you want to convert your business idea into an app or design an application for your website, we have the experience and expertise to design systems that deliver a smooth, bug-free performance loaded with rich features and a user-friendly interface.",
        "Tailored data analytics solutions to meet all your business needs. We help you integrate, aggregate, and analyse data from various sources to address your most deliberate business needs. This data-led transformation will connect data with ideas, people, and eventually outcomes that align your business with modern standards and help its exponential growth.",
        "Our experts research extensively to develop solutions and provide opportunities of a lifetime to advance your academic and professional objectives.",
        "Develop apps with confidence using our quick testing feature, better coverage, and a robust AI system that catches bugs before launch. Our software testing services comprise a strict evaluation to verify whether the application meets the required parameters.",
        ], i = 0;
    setInterval(function(){
        $('#changingpara').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 9000);
      
})();
