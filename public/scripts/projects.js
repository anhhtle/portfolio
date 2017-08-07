let state = {
    currentProject: 1,
    maxProjectsNumber: 3,
    navOneClass: 'arrow-img icon-2',
    navTwoClass: 'arrow-img icon-3'
}

$('.nav-toogle, .three-lines-container').on('click', () => {
    $('.nav-toggle-container').addClass('hidden');
    $('.navigation-container').addClass('z-index');
    $('.top-nav').removeClass('animation-remove-height');
    $('.top-nav').addClass('animation-height');
});

$('.menutoggle').on('click', () => {
    $('.top-nav').removeClass('animation-height');
    $('.top-nav').addClass('animation-remove-height');
    setTimeout(() => {
        $('.nav-toggle-container').removeClass('hidden');
        $('.navigation-container').removeClass('z-index');
    }, 800);
});

// bottom navigation
$('.arrow').on('mouseenter', function() {
    $(this).find('span').addClass('hidden');
});

$('.arrow').on('mouseleave', function() {
    $(this).find('span').removeClass('hidden');
});

let changeRightContainer = function(state, firstMove, secondMove) {
    if(state.currentProject === 1){
        state.navOneClass = 'arrow-img icon-2';
        state.navTwoClass = 'arrow-img icon-3';
    }

    else if(state.currentProject === 2){
        state.navOneClass = 'arrow-img icon-3';
        state.navTwoClass = 'arrow-img icon-1';
    }

    else {
        state.navOneClass = 'arrow-img icon-1';
        state.navTwoClass = 'arrow-img icon-2';
    }

    // change bottom navigation image
    const navOne = $('.one').find('div');
    navOne.removeClass(navOne.attr('class'));
    navOne.addClass(state.navOneClass);

    const navTwo = $('.two').find('div');
    navTwo.removeClass(navTwo.attr('class'));
    navTwo.addClass(state.navTwoClass);

    // change project detail section
    let current = $('.right-container').find('.active2')
    current.removeClass(current.attr('class'));
    current.addClass(`project-detail ${firstMove}`);

    let project = $('.right-container').children().eq(state.currentProject - 1);
    project.removeClass(project.attr('class'));
    project.addClass(`project-detail ${secondMove}`);
    project.addClass('active2');
}

let changeLeftContainer = function(state, firstMove, secondMove) {
    let current = $('.left-bottom').find('.active');
    current.removeClass(current.attr('class')).addClass(`project ${firstMove}`);

    let project = $('.left-bottom').children().eq(state.currentProject - 1);
    project.removeClass(project.attr('class'));
    project.addClass(`project ${secondMove}`);
    project.addClass('active');
}

let projectUp = (state) => {
    state.currentProject++;
    if(state.currentProject > state.maxProjectsNumber)
        state.currentProject = 1;
    
    changeRightContainer(state, 'move-up', 'move-up2');
    changeLeftContainer(state, 'move-down3', 'move-down4');
};

let projectDown = (state) => {
    state.currentProject--;
    if(state.currentProject === 0)
        state.currentProject = 3;

    changeRightContainer(state, 'move-down', 'move-down2');
    changeLeftContainer(state, 'move-up3', 'move-up4');
};

$('.one').on('click', () => {
    projectUp(state);
})

$('.two').on('click', () => {
    projectDown(state);
})